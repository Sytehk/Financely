@extends('layouts/contentLayoutMaster')

@section('title', 'Interest Logs')

@section('content')
  <!-- Striped rows start -->
  <div class="row" id="table-striped">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Interest Logs</h4>
        </div>
{{--        <div class="card-body">--}}
{{--          <p class="card-text">--}}
{{--            Your history below............--}}
{{--          </p>--}}
{{--        </div>--}}
        <div class="table-responsive">

          @if(count($logs) > 0)

          <table class="table table-striped">
            <thead>
            <tr>
              <th>SN</th>
              <th>Reference</th>
              <th>Type</th>
              <th>Rate</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
            </thead>
            <tbody>
            @php $id=0;@endphp
            @foreach($logs as $log)
              @php $id++;@endphp
              <tr>
                <td>{{ $id }}</td>
                <td>{{$log->reference_id}}</td>
                <td>{{$log->invest->plan->style->name}}</td>
                <td>{{$log->invest->plan->percentage +0}}%</td>
                <td><span class="text-success">{{config('app.currency_symbol')}}{{$log->amount + 0 }}</span></td>
                <td>{{ date("j, n, Y", strtotime($log->created_at)) }}</td>
                <td>{{ date("g:i A", strtotime($log->created_at)) }}</td>


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

          <h4 class="text-center">You Don't Have any Investment Yields Yet. Please select an investment plan to proceed with earnings</h4>
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
