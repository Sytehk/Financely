<?php

namespace App\Http\Controllers;

use App\Gateway;
use App\Offline;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class AdminGatewaysController extends Controller
{
    //

    public function index()
    {

        $gateways = Gateway::whereNotNull('name')->get();
        $local = Offline::all();
        return view('admin.gateways.index',compact('gateways','local'));

    }

    public function localIndex()
    {

        $gateways = Offline::all();

        return view('admin.local.index',compact('gateways'));

    }

    public function edit($id)
    {

        $gateway= Gateway::find($id);
        return view('admin.gateways.edit', compact('gateway'));

    }
    public function localEdit($id)
    {
        //

        $gateway= Offline::find($id);

        return view('admin.local.edit', compact('gateway'));


    }

    public function localCreate()
    {


        return view('admin.local.create');


    }

    public function update(Request $request, $id)
    {
        //

        $this->validate($request, [

            'name'=> 'required|max:100',
            'account' => 'required|max:100',
            'fixed' => 'required|numeric|max:100',
            'percent' => 'required|numeric|max:100',
            'mode' => 'required|numeric|min:0|max:1',
            'status' => 'required|boolean',

        ]);

        $gateway= Gateway::find($id);

        if ($gateway->id == 3){
            $this->validate($request, [
                'val3' => 'required|max:100'
            ]);
            $gateway->val3 = $request->val3;
            $gateway->details = 'Crypto Currency Instant';
        }
        if ($gateway->id == 2){

            $gateway->details ='Stripe Instant Deposit';
        }
        if ($gateway->id == 1){

            $gateway->details ='PayPal Instant Deposit';
        }
        if ($request->hasFile('image')){

            $this->validate($request, [

                'image' => 'required|image|mimes:jpeg,bmp,png,jpg'
            ]);

            $image = $request->image;

            $image_new_name = time().$image->getClientOriginalName();

            $image->move('uploads/gateways', $image_new_name);

            $gateway->image = 'uploads/gateways/'. $image_new_name;

        }


        $gateway->name = $request->name;

        $gateway->account = $request->account;

        $gateway->fixed = $request->fixed;

        $gateway->percent = $request->percent;
        $gateway->mode = $request->mode;
        $gateway->val1 = $request->val1;

        $gateway->val2 = $request->val2;

        $gateway->status = $request->status;



        $gateway->save();

        session()->flash('message', 'The Gateway Has Been Successfully Edited.');
        Session::flash('type', 'success');
        Session::flash('title', 'Edited Successful');


        return redirect()->route('admin.gateways.index');



    }
    public function localUpdate(Request $request, $id)
    {
        //

        $this->validate($request, [

            'name'=> 'required|max:100',
            'account' => 'required|max:100',
            'fixed' => 'required|numeric|max:200',
            'percent' => 'required|numeric|max:200',
            'status' => 'required|boolean',

        ]);

        $gateway= Offline::find($id);

        if ($request->hasFile('image')){

            $this->validate($request, [

                'image' => 'required|image|mimes:jpeg,bmp,png,jpg'
            ]);

            $image = $request->image;

            $image_new_name = time().$image->getClientOriginalName();

            $image->move('uploads/gateways', $image_new_name);

            $gateway->image = 'uploads/gateways/'. $image_new_name;

        }

        $gateway->name = $request->name;

        $gateway->account = $request->account;

        $gateway->fixed = $request->fixed;

        $gateway->percent = $request->percent;

        $gateway->details = $request->details;

        $gateway->status = $request->status;

        $gateway->save();

        session()->flash('message', ''.$request->name.' Payment Gateway Has Been Successfully Updated.');
        Session::flash('type', 'success');
        Session::flash('title', 'Edited Successful');


        return redirect()->route('admin.gateways.index');



    }

    public function localStore(Request $request)
    {
        //

        $this->validate($request, [

            'name'=> 'required|max:100',
            'account' => 'required|max:100',
            'fixed' => 'required|numeric',
            'percent' => 'required|numeric',
            'status' => 'required|boolean',
            'details' => 'required|max:1000',
            'image' => 'required',
        ]);


        $image = $request->image;

        $image_new_name = time().$image->getClientOriginalName();

        $image->move('uploads/gateways', $image_new_name);

       Offline::create([

            'name' => $request->name,
            'account' => $request->account,
            'fixed' => $request->fixed,
            'image' => 'uploads/gateways/' . $image_new_name,
            'percent' => $request->percent,
            'status' => $request->status,
            'details' => $request->details,

        ]);

        session()->flash('message', ''.$request->name.' Payment Gateway Has Been Created Successfully.');
        Session::flash('type', 'success');
        Session::flash('title', 'Created Successful');


        return redirect()->route('admin.gateways.index');



    }


    public function destroy($id)
    {
        //

        $gateway = Gateway::find($id);

        session()->flash('message', $gateway->name. " Payment Gateway can't be deleted. It is a system root payment gateway. ");
        Session::flash('type', 'warning');
        Session::flash('title', "Can't Be Deleted");

        return redirect()->route('admin.gateways.index');


    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function localDestroy($id)
    {
        //

        $gateway = Offline::find($id);

        $gateway->delete();

        session()->flash('message', 'Payment Gateway Has Been Successfully Deleted.');
        Session::flash('type', 'success');
        Session::flash('title', 'Deleted Successful');

        return redirect()->route('admin.gateways.index');


    }

}
