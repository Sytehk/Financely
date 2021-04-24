@extends('layouts/contentLayoutMaster')

@section('title', 'New Deposit')

@section('content')
  <!-- Accordion with margin start -->
  <section id="accordion-with-margin">
    <div class="row">
      <div class="col-sm-12">
        <div class="card collapse-icon">
          <div class="card-header">
            <h4 class="card-title">Choose Instant Payment Gateway</h4>
          </div>
          <div class="card-body">
            <p class="card-text ">
              These payment methods are automatic for easier and effortless deposits. Funds deposited using any of these methods do not require approval from us and is instantaneous.
            </p>
            <div class="collapse-margin" id="accordionExample">
              @foreach($gateways as $gateway)
              <div class="card">
                <div
                        class="card-header"
                        id="heading"
                        data-toggle="collapse"
                        role="button"
                        data-target="#collapseOne{{$gateway->id}}"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                >
                  <span class="lead collapse-title text-primary">{{$gateway->name}}</span>
                </div>

                <div id="collapseOne{{$gateway->id}}" class="collapse" aria-labelledby="heading" data-parent="#accordionExample">
                  <div class="card-body">
                    <p><span class="text-warning">When you deposit using <b>{{$gateway->name}},</b> you will be charged <b>{{config('app.currency_symbol')}}{{$gateway->fixed}}</b> with <b>{{$gateway->percent}}% of your deposit</b> as deposit charge.</span> </p>

                    <form action="{{route('instantPreview')}}" method="post">
                      {{ csrf_field() }}
                      <label class="mt-4 ">Please Enter The Amount To And Click On Proceed Button</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon5">$</span>
                        </div>
                        <input
                                type="number"
                                id="tp3"
                                name="amount"
                                class="form-control"
                                required
                                placeholder="Enter Amount"
                                aria-describedby="button-addon2"
                        />
                        <input
                                type="text"
                                id="amount"
                                name="gateway"
                                value="{{$gateway->id}}"
                                class="form-control"
                                hidden
                                placeholder="Amount"
                                aria-describedby="button-addon2"
                        />
                        <div class="input-group-append" id="button-addon2">
                          <button class="btn btn-outline-primary" type="submit">Proceed</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              @endforeach

                @foreach($local_gateways as $local)
                  <div class="card">
                    <div
                            class="card-header"
                            id="heading"
                            data-toggle="collapse"
                            role="button"
                            data-target="#collapseOne{{$local->id}}"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                    >
                      <span class="lead collapse-title text-primary">{{$local->name}}</span>
                    </div>

                    <div id="collapseOne{{$local->id}}" class="collapse" aria-labelledby="heading" data-parent="#accordionExample">
                      <div class="card-body">
                        <p><span class="text-warning">When you deposit using <b>{{$local->name}},</b> you will be charged <b>{{config('app.currency_symbol')}}{{$local->fixed}}</b> with <b>{{$local->percent}}% of your deposit</b> as deposit charge.</span> </p>

                        <form action="{{route('userPaymentPreview')}}" method="post">
                          {{ csrf_field() }}
                          <label class="mt-4 ">Please Enter The Amount To And Click On Proceed Button</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon5">$</span>
                            </div>
                            <input
                                    type="number"
                                    id="tp3"
                                    name="amount"
                                    class="form-control"
                                    required
                                    placeholder="Enter Amount To Deposit"
                                    aria-describedby="button-addon2"
                            />
                            <input
                                    type="text"
                                    id="amount"
                                    name="gateway"
                                    value="{{$local->id}}"
                                    class="form-control"
                                    hidden
                                    placeholder="Amount"
                                    aria-describedby="button-addon2"
                            />
                            <div class="input-group-append" id="button-addon2">
                              <button class="btn btn-outline-primary" type="submit">Proceed</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                @endforeach
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



  <!-- Accordion with margin end -->

  <!-- Accordion with margin start -->
  <section id="accordion-with-margin">
    <div class="row">
      <div class="col-sm-12">
        <div class="card collapse-icon">
          <div class="card-header">
            <h4 class="card-title">Choose Instant Payment Gateway</h4>
          </div>
          <div class="card-body">
            <p class="card-text ">
              These payment methods are automatic for easier and effortless deposits. Funds deposited using any of these methods do not require approval from us and is instantaneous.
            </p>
            <div class="collapse-margin" id="accordionExample">


            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Accordion with margin end -->
@endsection
