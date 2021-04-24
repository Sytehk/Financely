@extends('layouts/contentLayoutMaster')

@section('title', 'Investment History')

@section('content')
  <!-- Striped rows start -->
  <div class="row" id="table-striped">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Investment History</h4>
        </div>
{{--        <div class="card-body">--}}
{{--          <p class="card-text">--}}
{{--            Your history below............--}}
{{--          </p>--}}
{{--        </div>--}}
        <div class="table-responsive">

          @if(count($investments) > 0)

          <table class="table table-striped">
            <thead>
            <tr>
              <th>Investment Number</th>
              <th >Return Cycle</th>
              <th>Interest Rate</th>
              <th>Invested Amount</th>
              <th>Investment Date</th>
              <th>Investment Status</th>
            </tr>
            </thead>
            <tbody>
            @php $id=0;@endphp
            @foreach($investments as $investment)
              @php $id++;@endphp
            <tr>
              <td >{{$investment->reference_id}}</td>
              <td >{{$investment->plan->style->name}}</td>
              <td >{{$investment->plan->percentage +0}}%</td>
              <td >{{config('app.currency_symbol')}}{{$investment->amount + 0 }}</td>
              <td >{{$investment->created_at->diffForHumans()}}</td>
              <td>
              @if($investment->status == 0)
                <span class="badge badge-pill badge-light-warning mr-1">Pending</span>
              @elseif($investment->status == 1)
                <span class="badge badge-pill badge-light-primary mr-1">Running</span>
              @else
                <span class="badge badge-pill badge-light-success mr-1">Completed</span>
              @endif
              </td>
            </tr>
            @endforeach

            </tbody>
          </table>
            <nav aria-label="Page navigation example" class="float-right" style="margin-right: 30px; ">
              <ul class="pagination mt-3">

                <li class="page-item active"><a class="page-link" href="?page=1">1</a></li>
                <li class="page-item"><a class="page-link" href="?page=2">2</a></li>
                <li class="page-item"><a class="page-link" href="?page=3">3</a></li>
                <li class="page-item"><a class="page-link" href="?page=4">4</a></li>
                <li class="page-item"><a class="page-link" href="?page=5">5</a></li>
                <li class="page-item"><a class="page-link" href="?page=6">6</a></li>
                <li class="page-item"><a class="page-link" href="?page=7">7</a></li>
              </ul>
            </nav>
        </div>

        @else

          <h4 class="text-center">You have not invested into any plan yet. Please proceed to fund your account and select an investment plan to start!</h4>
        @endif

      </div>

    </div>
  </div>
  <!-- Striped rows end -->
@endsection
@section('vendor-script')
  <!-- vendor js files -->
  <script src="{{ asset(mix('vendors/js/pagination/jquery.bootpag.min.js')) }}"></script>
  <script src="{{ asset(mix('vendors/js/pagination/jquery.twbsPagination.min.js')) }}"></script>
@endsection
@section('page-script')
  {{-- Page js files --}}
  <script src="{{ asset(mix('js/scripts/pagination/components-pagination.js')) }}"></script>
@endsection
