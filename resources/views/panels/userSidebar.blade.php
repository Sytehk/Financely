@php
$configData = Helper::applClasses();
@endphp
<div class="main-menu menu-fixed {{($configData['theme'] === 'dark') ? 'menu-dark' : 'menu-light'}} menu-accordion menu-shadow" data-scroll-to-active="true">
  <div class="navbar-header">
    <ul class="nav navbar-nav flex-row">
      <li class="nav-item mr-auto">
        <a class="navbar-brand" href="{{url('user/dashboard')}}">
          <span class="brand-logo">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="130px" height="30px" viewBox="0 0 1771 408" enable-background="new 0 0 1771 408" xml:space="preserve">  <image id="image0" width="1771" height="408" x="0" y="0"
                                                                                                                                                                                                                                                                  xlink:href="data:image/png;base64,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
1ZosrjMFiyjRwoLv5OAU10XLbtetc1mlln5UjtV11o+vXnAHxV27biHZZasL1402JC78NBhOk0Ib
K8JMC4m9k4NxnbaqYlsv6DpX2X2GG67DdXdz3bXstKkiDbWA1Ds5OMd1wbLbdetbVLGt97su7nMs
F9xBcR2uW0d22erCdWm//TjrOn7OwQG4TlpTubV/VpTuOk/ZfYab1nUpsstWF66r5jrTi116qrmH
3snBSa6Lld2uW9eSyq29ouscZfcZbmLXZcguW124DtfF4ZfCWa4Lld2uW8+CVtg7rrOVIcuxwcBb
iPHZhk1w9oSkdi5d93WSFNJQUcdaeOZ9Jp/tpviWxktbzXUeiy/gOj/ZfYYbrsN193Pd5YudNFPk
seYbeWcnp7kuUna7bh3Lqbh4XHfqulVkl60uXFfPda/3j3d/FFXINdfIOzsZ1wnLqbj4j6oquM5N
dp/hpndduOyy1YXrCrtu/JuYFXLNNfLOTs5zXaDsdt36FVNz8yVd5yW7z3BruW4R2WWrC9ct4Lr+
F7saweaYeGcn4zpdLTU3j+vkrgu2Xba6cF1B11292CkjxSPYHBPv7ORE14XJbt+tWylVV/9WWA3X
OcnuM9yarltDdtnqwnW4Lg6/IJa5LinHx0o7e3DE19RafU3X+cjuM9ycXBcpu2x1BbjOeZx3dN20
7Kokm1vgnZ2M61SFlF09rjt33RKyy1bXhOuKTRPXmRLFKdq8Au/s5FTXBclu361XGXV3vy+tiutc
ZPcZbm6ui5NdtroiXOc7zVu67kJ2wkDxijanvDs7+c11wVEvyPGh0hxdV3j3RV3nIbvPcLtwnakI
3Sg6Am8hcJ228KtoOE4KXaC4ZZtP3p2dnOu6GNntu3UqovDu98XhOl0VullcB95ClPup78GuUxd+
GQ2HSaELFLds88m7s5OTXRciu323PjWUXn5R1znI7jPcXF0XY7tsdcW4znOUZtdldTLkus5vYpYK
N4+4OzsZ1xV/rbuz6/Sy+wy3S9dZi1DOoxV4C1Hu5yXd1HVzL3alws0j7s5OznZdhOz23fpUUHr5
u/JwnbgK5UAagbcQ5f6DNHd1Xft37GR54hhuHml3djSuE19Rfv3WcJKGkFEzp8VFui7wb0L39yRe
TX8lJtfJZvl20O1dd/hiJ4sT13RzDbsd6a4LkN2+W5f7F1p/KdepZfcZbj1eEF6sHct1Mx89bUuR
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
QmCC" />
</svg>
          </span>
{{--          <h2 class="brand-text">Financely</h2>--}}
        </a>
      </li>
      <li class="nav-item nav-toggle">
        <a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse">
          <i class="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i>
          <i class="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" data-feather="disc" data-ticon="disc"></i>
        </a>
      </li>
    </ul>
  </div>
  <div class="shadow-bottom"></div>
  <div class="main-menu-content">
    <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
      {{-- Foreach menu item starts --}}
      @if(isset($menuData[2]))
      @foreach($menuData[2]->menu as $menu)
      @if(isset($menu->navheader))
      <li class="navigation-header">
        <span>{{ __('locale.'.$menu->navheader) }}</span>
        <i data-feather="more-horizontal"></i>
      </li>
      @else
      {{-- Add Custom Class with nav-item --}}
      @php
      $custom_classes = "";
      if(isset($menu->classlist)) {
      $custom_classes = $menu->classlist;
      }
      @endphp
      <li class="nav-item {{ Route::currentRouteName() === $menu->slug ? 'active' : '' }} {{ $custom_classes }}">
        <a href="{{isset($menu->url)? url($menu->url):'javascript:void(0)'}}" class="d-flex align-items-center" target="{{isset($menu->newTab) ? '_blank':'_self'}}">
          <i data-feather="{{ $menu->icon }}" style="color:#7367f0"></i>
          <span class="menu-title text-truncate">{{ __('locale.'.$menu->name) }}</span>
          @if (isset($menu->badge))
          <?php $badgeClasses = "badge badge-pill badge-light-primary ml-auto mr-1" ?>
          <span class="{{ isset($menu->badgeClass) ? $menu->badgeClass : $badgeClasses }} ">{{$menu->badge}}</span>
          @endif
        </a>
        @if(isset($menu->submenu))
        @include('panels/submenu', ['menu' => $menu->submenu])
        @endif
      </li>
      @endif
      @endforeach
      @endif
      {{-- Foreach menu item ends --}}
    </ul>
  </div>
</div>
<!-- END: Main Menu-->
