<?php

namespace App\Http\Controllers;

use App\Interest;
use App\InterestLog;
use App\Invest;
use App\Plan;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class UserInterestController extends Controller
{
    //
    public function __construct()
    {

        $this->middleware('auth');


    }

    public function index(){
        
        $user = Auth::user();
        $time = date('M j, Y  H:i:s', strtotime($user->bonus));
        $rewards = json_encode($time);
        $investHourly = Plan::whereStatus(1)->whereType(1)->get();
        $investDaily = Plan::whereStatus(1)->whereType(2)->get();
        $investWeekly = Plan::whereStatus(1)->whereType(3)->get();

        return view('user.investment.new-investment',compact('investDaily','investHourly','investWeekly','rewards'));
    }
    public function investHistory(){
        
        $user = Auth::user();
        $time = date('M j, Y  H:i:s', strtotime($user->bonus));
        $rewards = json_encode($time);
        $user = Auth::user();
        $investments = Invest::whereUser_id($user->id)->latest()->paginate(10);

        return view('user.investment.history',compact('investments','rewards'));
    }
    public function interestLogs(){
        $user = Auth::user();
        $time = date('M j, Y  H:i:s', strtotime($user->bonus));
        $rewards = json_encode($time);
        $user = Auth::user();
        $logs = InterestLog::whereUser_id($user->id)->latest()->paginate(100);

        return view('user.investment.logs',compact('logs','rewards'));
    }



    public function submit(Request $request){

        $this->validate($request, [

            'amount'=> 'required||numeric',
            'plan_id' => 'required|numeric',

        ]);

        $plan = Plan::find($request->plan_id);
        $name = $request->name;
        $minimum = $plan->minimum;

        $maximum = $plan->maximum;
        
        $percent = $plan->percentage;

        $amount = $request->amount;

        $user = Auth::user();

        if ($amount < $minimum){

            session()->flash('message', "Your intended Investment is below the minimum investment. You can only invest a minimum of $".$minimum." in this plan. ");
            Session::flash('type', 'error');
            Session::flash('title', 'Insufficient Balance');

            return redirect()->route('userInvestments');
        }
        elseif ($amount > $maximum){


            session()->flash('message', "Your intended Investment is above the maximum investment. You can only invest a maximum of $".$maximum." in this plan.");
            Session::flash('type', 'error');
            Session::flash('title', 'Amount High');

            return redirect()->route('userInvestments');

        }
        elseif ($amount > $user->deposit_balance ){

            session()->flash('message', "You want to invest $".$amount.". But You have only $".$user->deposit_balance." in your deposit balance. So Deposit money first or try transfer your all money to deposit balance using fund transfer.");
            Session::flash('type', 'error');
            Session::flash('title', 'Insufficient Funds');

            return redirect()->route('userInvestments');

        }
        else{

            $percentage =  $plan->percentage;
            $cycle =  $plan->repeat;
            
			$user = Auth::user();
			$time = date('M j, Y  H:i:s', strtotime($user->bonus));
			$rewards = json_encode($time);
            $profit = (($percentage / 100) * $amount * $cycle);
           
            $invest = (object) array(
                "profit"=>$profit,
                "amount"=>$amount,
                "name"=>$name,
                "total"=>$profit + $amount,
                "id" => $request->plan_id,
            );
            return view('user.investment.preview',compact('invest','rewards'));



        }



    }
    public function confirm(Request $request){

        $this->validate($request, [

            'plan_id'=> 'required|numeric',
            'amount' => 'required|numeric',
            'tos' => 'required|accepted',

        ]);

        $plan = Plan::find($request->plan_id);

        $user = Auth::user();
        
        $names = $request->plan;
        $user->deposit_balance = $user->deposit_balance - $request->amount;

        $user->save();

        $delay = $plan->start_duration;

        $today = Carbon::now();

        $investment = new Invest();
        $investment->user_id = $user->id;
        $investment->name = $names;
        $investment->plan_id = $request->plan_id;
        $investment->reference_id = Str::random(12);
        $investment->amount = $request->amount;
        $investment->start_time = $today->addHours($delay);
        $investment->status = 0;

        $investment->save();

        $interest = new Interest();
        $interest->invest_id = $investment->id;
        $interest->user_id = $user->id;
        
        $investment->name = $names;
        $interest->reference_id = Str::random(12);
        $interest->start_time = $today->addHours($delay);
        $interest->total_repeat = 0;
        $interest->status = 0;

        $interest->save();

        Toastr::success('You Have Successfully Invested $'.$request->amount.' You can monitor your investment progress from My Investment Yield Tab from the menu.', 'Investment Successful');

        return redirect()->route('userInvest.history');
    }

}
