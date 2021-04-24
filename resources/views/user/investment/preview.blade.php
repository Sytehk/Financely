@extends('layouts/contentLayoutMaster')

@section('title', 'Preview Investment')


@section('content')
    <div class="row">
        <div class="col-12">
            <!-- Bordered table start -->
            <div class="row" id="table-bordered">
                <div class="col-12">
                    <div class="card" style="padding-left: 30px; padding-right: 30px; ">
                        <div class="card-header">
                            <h4 class="card-title">Wallet Summary</h4>
                        </div>
                        <div class="card-body">
                            <p class="card-text">
                                Please note that all invest plans have a short delay period of 1-hour. This wait helps our bot to better determine fraudulent activities.
                            </p>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Review</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <span class="font-weight-bold"> Available Balance</span>
                                    </td>
                                    <td>{{config('app.currency_symbol')}}{{Auth::user()->deposit_balance + 0}}</td>
                                    <td><span class="badge badge-pill badge-light-success mr-1">OK</span></td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="font-weight-bold"> Intended Investment</span>
                                    </td>
                                    <td>{{config('app.currency_symbol')}}{{$invest->amount}}</td>
                                    <td><span class="badge badge-pill badge-light-success mr-1">OK</span></td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="font-weight-bold"> Remaining Balance</span>
                                    </td>
                                    <td>{{config('app.currency_symbol')}}{{Auth::user()->deposit_balance - $invest->amount}}</td>
                                    <td><span class="badge badge-pill badge-light-success mr-1">OK</span></td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                        <button type="button" onclick="document.location='{{route('userDashboard')}}'" class="btn btn-outline-warning round" style="margin-top: 30px; margin-bottom: 20px; width: 40%;">Cancel Process</button>
                    </div>
                </div>
            </div>
            <!-- Bordered table end -->

            <!-- Bordered table start -->
            <div class="row" id="table-bordered">
                <div class="col-12">
                    <div class="card" style="padding-left: 30px; padding-right: 30px; ">
                        <div class="card-header">
                            <h4 class="card-title">Investment Summary</h4>
                        </div>
                        <div class="card-body">

                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Review</th>
                                    <th>Amount</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <span class="font-weight-bold">Invested Amount</span>
                                    </td>
                                    <td>{{config('app.currency_symbol')}}{{$invest->amount}}</td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="font-weight-bold">Investment Yield</span>
                                    </td>
                                    <td>{{config('app.currency_symbol')}}{{$invest->profit}}</td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="font-weight-bold">Investment Return</span>
                                    </td>
                                    <td>{{config('app.currency_symbol')}}{{$invest->total}}</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                        <form action="{{route('userInvestment.confirm')}}" class="text-center mt-3" method="post">
                            {{ csrf_field() }}
                            <input
                                    type="checkbox"
                                    checked hidden
                                    name="tos"
                                    value="1"
                                    class="form-control hidden"
                                    aria-describedby="button-addon2"
                            />
                            <input
                                    name="plan_id"
                                    value="{{$invest->id}}"
                                    class="form-control hidden"
                                    aria-describedby="button-addon2"
                            />
                            <input
                                    name="plan"
                                    value="{{$invest->name}}"
                                    class="form-control hidden"
                                    aria-describedby="button-addon2"
                            />
                            <input
                                    name="amount"
                                    value="{{$invest->amount}}"
                                    class="form-control hidden"
                                    aria-describedby="button-addon2"
                            />
                            <div class="row col-12" style="margin-bottom: 30px;">
                            <button type="submit" class="btn-block btn-outline-success round center" style="margin-bottom: 10px; height: 40px;">Proceed To Invest</button>
                            <button type="button" onclick="document.location='{{route('userInvestments')}}'" style="margin-bottom: 30px; height: 40px;" class="btn-block btn-outline-danger round center" >Select Another Plan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Bordered table end -->
        </div>
    </div>
@endsection







