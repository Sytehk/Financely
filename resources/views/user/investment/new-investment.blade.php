
@extends('layouts/contentLayoutMaster')

@section('title', 'New Investment')

@section('page-style')
    {{-- Page Css files --}}
    <link rel="stylesheet" type="text/css" href="{{asset('css/base/pages/page-pricing.css')}}">
@endsection

@section('content')
    <section id="pricing-plan">
        <!-- title text and switch button -->
        <div class="text-center">
            <h1 class="mt-5">Investment Plans</h1>
            <p class="mb-2 pb-75">
                All plans include 5%+ bonus to further boost your profit. Choose the best plan that fits your needs.
            </p>
            <div class="d-flex align-items-center justify-content-center mb-5 pb-50">
                <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab-center" data-toggle="pill" href="#home-center" aria-expanded="true"
                        >Hourly</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                                class="nav-link"
                                id="profile-tab-center"
                                data-toggle="pill"
                                href="#profile-center"
                                aria-expanded="false"
                        >Daily</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="about-tab-center" data-toggle="pill" href="#about-center" aria-expanded="false"
                        >Weekly</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="javascript:void(0);"> Monthly </a>
                    </li>
                </ul>
            </div>
        </div>
        <!--/ title text and switch button -->

        <!-- pricing plan cards -->
        <div class="row pricing-card">
            <div class="col-12 col-sm-offset-2 col-sm-12 col-md-12 col-lg-offset-2 col-lg-12 mx-auto">
                <div class="row">

                    <div class="tab-content col-12">
                        <div
                                role="tabpanel"
                                class="tab-pane active"
                                id="home-center"
                                aria-labelledby="home-tab-center"
                                aria-expanded="true"
                        >


                            <div class="col-12 col-sm-offset-2 col-sm-12 col-md-12 col-lg-offset-2 col-lg-12 mx-auto">
                                <div class="row">
                        @if($investHourly)
                            @foreach($investHourly as $investH)
                                <!-- basic plan -->
                                    <div class="col-12 col-md-4">
                                        <div class="card basic-pricing text-center">
                                            <div class="card-body">
                                                <img src="{{asset('images/illustration/Pot1.svg')}}" class="mb-2 mt-1" alt="svg img" />
                                                <h3>{{$investH->name}}</h3>
                                                <p class="card-text">A simple start for everyone</p>
                                                <div class="annual-plan">
                                                    <div class="plan-price mt-2">
                                                        <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                                                        <span class="pricing-basic-value font-weight-bolder text-primary">0</span>
                                                        <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/month</sub>
                                                    </div>
                                                    <small class="annual-pricing d-none text-muted"></small>
                                                </div>
                                                <ul class="list-group list-group-circle text-left">
                                                    <li class="list-group-item">100 responses a month</li>
                                                    <li class="list-group-item">Unlimited forms and surveys</li>
                                                    <li class="list-group-item">Unlimited fields</li>
                                                    <li class="list-group-item">Basic form creation tools</li>
                                                    <li class="list-group-item">Up to 2 subdomains</li>
                                                </ul>

                                            </div>
                                            <form action=" " method="post">
                                                {{ csrf_field() }}
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon5">$</span>
                                                </div>
                                                <input
                                                        class="form-control hidden"
                                                        name="name" value="{{$invest->name}}"
                                                        aria-describedby="button-addon2"
                                                />
                                                <input
                                                        name="plan_id"
                                                        value="{{$invest->id}}"
                                                        class="form-control hidden"
                                                        aria-describedby="button-addon2"
                                                />
                                                <input
                                                        type="number"
                                                        id="amount"
                                                        name="amount"
                                                        class="form-control"
                                                        required
                                                        placeholder="Amount"
                                                        aria-describedby="button-addon2"
                                                />
                                                <div class="input-group-append" id="button-addon2">
                                                    <button class="btn btn-outline-primary" type="button">Invest</button>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                    <!--/ basic plan -->
                                @endforeach
                            @endif
                                </div>
                            </div>


                        </div>
                        <div
                                class="tab-pane "
                                id="profile-center"
                                role="tabpanel"
                                aria-labelledby="profile-tab-center"
                                aria-expanded="false"
                        >
                            <div class="col-12 col-sm-offset-2 col-sm-12 col-md-12 col-lg-offset-2 col-lg-12 mx-auto">
                                <div class="row">
                                @if($investDaily)
                                    @foreach($investDaily as $investD)
                                        <!-- basic plan -->
                                            <div class="col-12 col-md-4">
                                                <div class="card basic-pricing text-center">
                                                    <div class="card-body">
                                                        <img src="{{asset('images/illustration/Pot1.svg')}}" class="mb-2 mt-1" alt="svg img" />
                                                        <h3>{{$investD->name}}</h3>
                                                        <p class="card-text">A simple start for everyone</p>
                                                        <div class="annual-plan">
                                                            <div class="plan-price mt-2">
                                                                <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                                                                <span class="pricing-basic-value font-weight-bolder text-primary">0</span>
                                                                <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/month</sub>
                                                            </div>
                                                            <small class="annual-pricing d-none text-muted"></small>
                                                        </div>
                                                        <ul class="list-group list-group-circle text-left">
                                                            <li class="list-group-item">100 responses a month</li>
                                                            <li class="list-group-item">Unlimited forms and surveys</li>
                                                            <li class="list-group-item">Unlimited fields</li>
                                                            <li class="list-group-item">Basic form creation tools</li>
                                                            <li class="list-group-item">Up to 2 subdomains</li>
                                                        </ul>
                                                        <button class="btn btn-block btn-outline-success mt-2">Your current plan</button>
                                                    </div>
                                                    <form action=" " method="post">
                                                        {{ csrf_field() }}
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text" id="basic-addon5">$</span>
                                                            </div>
                                                            <input
                                                                    class="form-control hidden"
                                                                    name="name" value="{{$invest->name}}"
                                                                    aria-describedby="button-addon2"
                                                            />
                                                            <input
                                                                    name="plan_id"
                                                                    value="{{$invest->id}}"
                                                                    class="form-control hidden"
                                                                    aria-describedby="button-addon2"
                                                            />
                                                            <input
                                                                    type="number"
                                                                    id="amount"
                                                                    name="amount"
                                                                    class="form-control"
                                                                    required
                                                                    placeholder="Amount"
                                                                    aria-describedby="button-addon2"
                                                            />
                                                            <div class="input-group-append" id="button-addon2">
                                                                <button class="btn btn-outline-primary" type="button">Invest</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <!--/ basic plan -->
                                        @endforeach
                                    @endif
                                </div>
                            </div>

                        </div>
                        <div
                                class="tab-pane"
                                id="about-center"
                                role="tabpanel"
                                aria-labelledby="about-tab-center"
                                aria-expanded="false"
                        >

                            <div class="col-12 col-sm-offset-2 col-sm-12 col-md-12 col-lg-offset-2 col-lg-12 mx-auto">
                                <div class="row">
                                @if($investWeekly)
                                    @foreach($investWeekly as $investW)
                                        <!-- basic plan -->
                                            <div class="col-12 col-md-4">
                                                <div class="card basic-pricing text-center">
                                                    <div class="card-body">
                                                        <img src="{{asset('images/illustration/Pot1.svg')}}" class="mb-2 mt-1" alt="svg img" />
                                                        <h3>{{$investW->name}}</h3>
                                                        <p class="card-text">A simple start for everyone</p>
                                                        <div class="annual-plan">
                                                            <div class="plan-price mt-2">
                                                                <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                                                                <span class="pricing-basic-value font-weight-bolder text-primary">0</span>
                                                                <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/month</sub>
                                                            </div>
                                                            <small class="annual-pricing d-none text-muted"></small>
                                                        </div>
                                                        <ul class="list-group list-group-circle text-left">
                                                            <li class="list-group-item">100 responses a month</li>
                                                            <li class="list-group-item">Unlimited forms and surveys</li>
                                                            <li class="list-group-item">Unlimited fields</li>
                                                            <li class="list-group-item">Basic form creation tools</li>
                                                            <li class="list-group-item">Up to 2 subdomains</li>
                                                        </ul>
                                                        <button class="btn btn-block btn-outline-success mt-2">Your current plan</button>
                                                    </div>
                                                    <form action=" " method="post">
                                                        {{ csrf_field() }}
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text" id="basic-addon5">$</span>
                                                            </div>
                                                            <input
                                                                    class="form-control hidden"
                                                                    name="name" value="{{$invest->name}}"
                                                                    aria-describedby="button-addon2"
                                                            />
                                                            <input
                                                                    name="plan_id"
                                                                    value="{{$invest->id}}"
                                                                    class="form-control hidden"
                                                                    aria-describedby="button-addon2"
                                                            />
                                                            <input
                                                                    type="number"
                                                                    id="amount"
                                                                    name="amount"
                                                                    class="form-control"
                                                                    required
                                                                    placeholder="Amount"
                                                                    aria-describedby="button-addon2"
                                                            />
                                                            <div class="input-group-append" id="button-addon2">
                                                                <button class="btn btn-outline-primary" type="button">Invest</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <!--/ basic plan -->
                                        @endforeach
                                    @endif
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!--/ pricing plan cards -->

        <!-- pricing free trial -->
        <div class="pricing-free-trial">
            <div class="row">
                <div class="col-12 col-lg-10 col-lg-offset-3 mx-auto">
                    <div class="pricing-trial-content d-flex justify-content-between">
                        <div class="text-center text-md-left mt-3">
                            <h3 class="text-primary">Still not convinced? Start with a 10-Hours FREE Investment!</h3>
                            <h5>You will get to witness the Investment system in action with no risks for 10-hours and gain a little interest free.</h5>
                            <button class="btn btn-primary mt-2 mt-lg-3">Start 10-hours FREE Trial</button>
                        </div>

                        <!-- image -->
                        <img
                                src="{{asset('images/illustration/pricing-Illustration.svg')}}"
                                class="pricing-trial-img img-fluid"
                                alt="svg img"
                        />
                    </div>
                </div>
            </div>
        </div>
        <!--/ pricing free trial -->

        <!-- pricing faq -->
        <div class="pricing-faq">
            <h3 class="text-center">FAQ's</h3>
            <p class="text-center">Let us help answer the most common questions.</p>
            <div class="row my-2">
                <div class="col-12 col-lg-10 col-lg-offset-2 mx-auto">
                    <!-- faq collapse -->
                    <div class="collapse-margin collapse-icon" id="accordionExample">
                        <div class="card">
                            <div
                                    class="card-header"
                                    id="headingOne"
                                    data-toggle="collapse"
                                    role="button"
                                    data-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                            >
                                <span class="lead collapse-title">Can i redo the 10-hour Free trial again?</span>
                            </div>

                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll
                                    bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy
                                    caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut
                                    marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div
                                    class="card-header"
                                    id="headingTwo"
                                    data-toggle="collapse"
                                    role="button"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                            >
                                <span class="lead collapse-title">Can i cancel a plan when it has already started?</span>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    Tiramisu marshmallow dessert halvah bonbon cake gingerbread. Jelly beans chocolate pie powder. Dessert
                                    pudding chocolate cake bonbon bear claw cotton candy cheesecake. Biscuit fruitcake macaroon carrot cake.
                                    Chocolate cake bear claw muffin chupa chups pudding.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div
                                    class="card-header"
                                    id="headingThree"
                                    data-toggle="collapse"
                                    role="button"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                            >
                                <span class="lead collapse-title">Is there a delay before a purchased plan becomes active and running?</span>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans
                                    soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin
                                    chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping
                                    toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ pricing faq -->
    </section>
@endsection

@section('page-script')
    {{-- Page js files --}}
    <script src="{{asset('js/scripts/pages/page-pricing.js')}}"></script>
@endsection
