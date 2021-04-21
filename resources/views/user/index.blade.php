@extends('layouts/contentLayoutMaster')

@section('title', 'User Dashboard')

@section('vendor-style')
    {{-- Vendor Css files --}}
    <link rel="stylesheet" href="{{ asset(mix('vendors/css/charts/apexcharts.css')) }}">
    <link rel="stylesheet" href="{{asset('css/base/plugins/extensions/ext-component-toastr.css')}}">
    <link rel="stylesheet" href="{{asset('vendors/css/extensions/toastr.min.css')}}">
@endsection
@section('page-style')
    {{-- Page Css files --}}
    <link rel="stylesheet" href="{{ asset(mix('css/base/plugins/charts/chart-apex.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/base/pages/dashboard-ecommerce.css')) }}">
    <link rel="stylesheet" href="{{asset('css/base/plugins/extensions/ext-component-toastr.css')}}">
@endsection

@section('content')
    <div class="row">

        <div class="col-12">
            <div class="row match-height">
                <!-- Earnings Card -->
                <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-header align-items-start pb-0">
                            <div>
                                <h2 class="font-weight-bolder">{{config('app.currency_symbol')}}{{$user->deposit_balance + 0}}</h2>
                                <p class="card-text">Wallet Earnings</p>
                            </div>
                            <div class="avatar bg-light-success p-50">
                                <div class="avatar-content">
                                    <i data-feather="user-check" class="font-medium-5"></i>
                                </div>
                            </div>
                        </div>
                        <div id="line-area-chart-6"></div>
                    </div>
                </div>
                <!--/ Earnings Card -->

                <!-- Remove Action -->
                <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="card bg-warning text-white">
                        <div class="card-body">
                            <h4 class="card-title text-white">KYC Verification</h4>
                            <p class="card-text">You have not yet verified your identity on Financely. Please do so to
                                remove account restrictions.</p>
                        </div>
                    </div>
                </div>
                <!--/ Remove Action -->

                <!-- Medal Card -->
                <div class="col-12 col-md-4 col-lg-4 col-sm-12">
                    <div class="card card-congratulation-medal">
                        <div class="card-body">
                            <h5>Free Claim Is Ready 🎉</h5>
                            <p class="card-text font-small-3">Claim Your Daily Reward Noww</p>
                            <h3>
                                <a href="javascript:void(0);">00:00:00</a>
                            </h3>
                            <button type="button" class="btn btn-primary">Claim Now $5</button>
                            <img src="{{asset('images/illustration/badge.svg')}}" class="congratulation-medal"
                                 alt="Medal Pic"/>
                        </div>
                    </div>
                </div>
                <!--/ Medal Card -->
            </div>
        </div>

        <div class="col-12">
            <!-- Miscellaneous Charts -->
            <div class="row match-height">
                <!-- Bar Chart -Orders -->
                <div class="col-lg-2 col-6">
                    <div class="card">
                        <div class="card-body pb-50">
                            <h6>Deposits</h6>
                            <h2 class="font-weight-bolder mb-1">{{config('app.currency_symbol')}}{{$user->deposit_balance + 0}}</h2>
                            <div id="statistics-bar-chart"></div>
                        </div>
                    </div>
                </div>
                <!--/ Bar Chart -->

                <!-- Line Chart - Profit -->
                <div class="col-lg-2 col-6">
                    <div class="card card-tiny-line-stats">
                        <div class="card-body pb-50">
                            <h6>Withdrawals</h6>
                            <h2 class="font-weight-bolder mb-1">{{config('app.currency_symbol')}}{{$withdraw + 0}}</h2>
                            <div id="statistics-line-chart"></div>
                        </div>
                    </div>
                </div>
                <!--/ Line Chart -->
                <div class="col-lg-8 col-12">
                    <div class="card card-statistics">
                        <div class="card-header">
                            <h4 class="card-title">Stats</h4>
                            <div class="d-flex align-items-center">
                                <p class="card-text mr-25 mb-0">Updated</p>
                            </div>
                        </div>
                        <div class="card-body statistics-body">
                            <div class="row">
                                <div class="col-md-3 col-sm-6 col-12 mb-2 mb-md-0">
                                    <div class="media">
                                        <div class="avatar bg-light-primary mr-2">
                                            <div class="avatar-content">
                                                <i data-feather="trending-up" class="avatar-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media-body my-auto">
                                            <h4 class="font-weight-bolder mb-0">{{config('app.currency_symbol')}}{{$user->referral_balance + 0}}</h4>
                                            <p class="card-text font-small-3 mb-0">Referral Earnings</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-12 mb-2 mb-md-0">
                                    <div class="media">
                                        <div class="avatar bg-light-info mr-2">
                                            <div class="avatar-content">
                                                <i data-feather="user" class="avatar-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media-body my-auto">
                                            <h4 class="font-weight-bolder mb-0">{{config('app.currency_symbol')}}{{$unpaid + 0}}</h4>
                                            <p class="card-text font-small-3 mb-0">Total Loans</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-12 mb-2 mb-sm-0">
                                    <div class="media">
                                        <div class="avatar bg-light-danger mr-2">
                                            <div class="avatar-content">
                                                <i data-feather="box" class="avatar-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media-body my-auto">
                                            <h4 class="font-weight-bolder mb-0">{{config('app.currency_symbol')}}{{$paid + 0}}</h4>
                                            <p class="card-text font-small-3 mb-0">Paid Loans</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-12">
                                    <div class="media">
                                        <div class="avatar bg-light-success mr-2">
                                            <div class="avatar-content">
                                                <i data-feather="dollar-sign" class="avatar-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media-body my-auto">
                                            <h4 class="font-weight-bolder mb-0">{{config('app.currency_symbol')}}{{$balance + 0}}</h4>
                                            <p class="card-text font-small-3 mb-0">Unpaid Loans</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/ Miscellaneous Charts -->

            <!-- Cryptocurrency Price Widget -->
            <script>!function () {
                    var e = document.getElementsByTagName("script"), t = e[e.length - 1],
                        n = document.createElement("script");

                    function r() {
                        var e = crCryptocoinPriceWidget.init({
                            base: "USD,EUR,INR,NGN,GPB",
                            items: "BTC,ETH,BNB,DOGE,LTC,DASH",
                            backgroundColor: "283046",
                            streaming: "1",
                            striped: "1",
                            rounded: "1",
                            boxShadow: "1",
                            border: "1"
                        });
                        t.parentNode.insertBefore(e, t)
                    }

                    n.src = "{{ asset('js/scripts/btc.js') }}", n.async = !0, n.readyState ? n.onreadystatechange = function () {
                        "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = null, r())
                    } : n.onload = function () {
                        r()
                    }, t.parentNode.insertBefore(n, null)
                }();</script>
            <p style="margin-bottom: 20px;"></p>
                <!-- /Cryptocurrency Price Widget -->

            <div class="row">
                <!-- Transaction card -->
                <div class="col-12 col-md-4 col-lg-4 col-sm-12">
                    <div class="card card-transaction">
                        <div class="card-header">
                            <h4 class="card-title">Transactions</h4>
                            <i data-feather="more-vertical" class="font-medium-3 cursor-pointer"></i>
                        </div>
                        <div class="card-body">
                            <div class="transaction-item">
                                <div class="media">
                                    <div class="avatar bg-light-primary rounded">
                                        <div class="avatar-content">
                                            <i data-feather="pocket" class="avatar-icon font-medium-3"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="transaction-title">Wallet</h6>
                                        <small>Starbucks</small>
                                    </div>
                                </div>
                                <div class="font-weight-bolder text-danger">- $74</div>
                            </div>
                            <div class="transaction-item">
                                <div class="media">
                                    <div class="avatar bg-light-success rounded">
                                        <div class="avatar-content">
                                            <i data-feather="check" class="avatar-icon font-medium-3"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="transaction-title">Bank Transfer</h6>
                                        <small>Add Money</small>
                                    </div>
                                </div>
                                <div class="font-weight-bolder text-success">+ $480</div>
                            </div>
                            <div class="transaction-item">
                                <div class="media">
                                    <div class="avatar bg-light-danger rounded">
                                        <div class="avatar-content">
                                            <i data-feather="dollar-sign" class="avatar-icon font-medium-3"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="transaction-title">Paypal</h6>
                                        <small>Add Money</small>
                                    </div>
                                </div>
                                <div class="font-weight-bolder text-success">+ $590</div>
                            </div>
                            <div class="transaction-item">
                                <div class="media">
                                    <div class="avatar bg-light-warning rounded">
                                        <div class="avatar-content">
                                            <i data-feather="credit-card" class="avatar-icon font-medium-3"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="transaction-title">Mastercard</h6>
                                        <small>Ordered Food</small>
                                    </div>
                                </div>
                                <div class="font-weight-bolder text-danger">- $23</div>
                            </div>
                            <div class="transaction-item">
                                <div class="media">
                                    <div class="avatar bg-light-info rounded">
                                        <div class="avatar-content">
                                            <i data-feather="trending-up" class="avatar-icon font-medium-3"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="transaction-title">Transfer</h6>
                                        <small>Refund</small>
                                    </div>
                                </div>
                                <div class="font-weight-bolder text-success">+ $98</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ Transaction card -->


                <!-- Timeline Starts -->
                <div class="col-12 col-md-4 col-lg-4 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Recent News</h4>
                        </div>
                        <div class="card-body">
                            <ul class="timeline">
                                <li class="timeline-item">
                                    <span class="timeline-point timeline-point-indicator"></span>
                                    <div class="timeline-event">
                                        <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                            <h6>12 Invoices have been paid</h6>
                                            <span class="timeline-event-time">12 min ago</span>
                                        </div>
                                        <p>Invoices have been paid to the company. Invoices have been paid to the
                                            company.</p>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <span class="timeline-point timeline-point-indicator"></span>
                                    <div class="timeline-event">
                                        <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                            <h6>12 Invoices have been paid</h6>
                                            <span class="timeline-event-time">12 min ago</span>
                                        </div>
                                        <p>Invoices have been paid to the company. Invoices have been paid to the
                                            company.</p>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <span class="timeline-point timeline-point-indicator"></span>
                                    <div class="timeline-event">
                                        <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                            <h6>12 Invoices have been paid</h6>
                                            <span class="timeline-event-time">12 min ago</span>
                                        </div>
                                        <p>Invoices have been paid to the company. Invoices have been paid to the
                                            company.</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


                <div class="col-12 col-md-4 col-lg-4 col-sm-12">
                    <div class="card text-center mb-3">
                        <div class="card-body">
                            <h4 class="card-title">Earn With Referral</h4>
                            <p class="card-text">Invite your friends & family to earn more.</p>
                            <div class="row">
                                <div class="col-xl-11 col-md-11 col-sm-11 col-11 pr-sm-0">
                                    <div class="form-group">
                                        <input type="text" class="form-control" readonly="readonly" id="copy-to-clipboard-input" value="Copy Me!" />
                                    </div>
                                </div>
                                <div class="col-sm-3 col-12 center">
                                    <button class="btn btn-outline-primary" id="btn-copy">Copy!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    </div>
@endsection

@section('vendor-script')
    {{-- Vendor js files --}}
    <script src="{{asset('vendors/js/extensions/toastr.min.js')}}"></script>
    <script src="{{ asset(mix('vendors/js/charts/apexcharts.min.js')) }}"></script>
@endsection
@section('page-script')
    {{-- Page js files --}}
    <script src="{{ asset(mix('js/scripts/cards/card-analytics.js')) }}"></script>
    <script src="{{ asset(mix('js/scripts/extensions/ext-component-clipboard.js')) }}"></script>
    <script src="{{ asset(mix('js/scripts/pages/dashboard-ecommerce.js')) }}"></script>
    <script src="{{ asset(mix('js/scripts/cards/card-statistics.js')) }}"></script>
@endsection

{{--<script>--}}
{{--    var userText = $('#copy-to-clipboard-input');--}}
{{--    var btnCopy = $('#btn-copy'),--}}
{{--        isRtl = $('html').attr('data-textdirection') === 'rtl';--}}

{{--    // copy text on click--}}
{{--    btnCopy.on('click', function () {--}}
{{--        userText.select();--}}
{{--        document.execCommand('copy');--}}
{{--        toastr['success']('', 'Copied to clipboard!', {--}}
{{--            rtl: isRtl--}}
{{--        });--}}
{{--    });--}}
{{--</script>--}}

