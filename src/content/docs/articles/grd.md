---
title: "grd"
pagefind: true
---

``` r
library(hyperion)
#> 
#> 
#> ── pharos configuration ────────────────────────────────────────────────────────
#> ✔ pharos CLI: 0.5.1 (/Users/mattsmith/.cargo/bin/pharos)
#> ✔ pharos.toml found: hyperion/pharos.toml
#>     └ hyperion.config_dir : (unset)
#> ── hyperion options ────────────────────────────────────────────────────────────
#> ✔ hyperion.significant_number_display : 4
#> ── hyperion nonmem object options ──────────────────────────────────────────────
#> ✔ hyperion.nonmem_model.show_included_columns : FALSE
#> ✔ hyperion.nonmem_summary.rse_threshold : 50
#> ✔ hyperion.nonmem_summary.shrinkage_threshold : 30
library(dplyr)
#> 
#> Attaching package: 'dplyr'
#> The following objects are masked from 'package:stats':
#> 
#>     filter, lag
#> The following objects are masked from 'package:base':
#> 
#>     intersect, setdiff, setequal, union
```

``` r
get_gradients(file.path("grd", "bql.grd"))  |> 
  slice_tail(n = 1) |> 
  summarize(any_zero = any(across(everything(), ~ .x == 0))) |> 
  pull(any_zero) |> 
  as.numeric()
#> [1] 1
```

``` r
get_gradients(file.path("models", "onecmt", "run001"))
#>   iteration method         TVCL          TVV        TVKA     OM1_TVCL
#> 1         0   FOCE -95.24010000 -1.54473e+02 -50.3937000 -1.85651e+01
#> 2         5   FOCE  -5.65185000 -1.31776e+01  -2.3672200 -1.17689e+00
#> 3        10   FOCE  -0.05381990 -1.24398e+00  -0.2432470  2.56664e-02
#> 4        13   FOCE   0.00312907 -8.27509e-04   0.0013005  1.92388e-04
#>        OM2_TVV   SIGMA_1_1
#> 1 -5.83561e+01 16.98700000
#> 2 -4.06991e+00  1.21143000
#> 3  1.51531e-01 -0.01604710
#> 4  1.49836e-04  0.00063828

get_gradients(file.path("models", "onecmt", "run001"))
#>   iteration method         TVCL          TVV        TVKA     OM1_TVCL
#> 1         0   FOCE -95.24010000 -1.54473e+02 -50.3937000 -1.85651e+01
#> 2         5   FOCE  -5.65185000 -1.31776e+01  -2.3672200 -1.17689e+00
#> 3        10   FOCE  -0.05381990 -1.24398e+00  -0.2432470  2.56664e-02
#> 4        13   FOCE   0.00312907 -8.27509e-04   0.0013005  1.92388e-04
#>        OM2_TVV   SIGMA_1_1
#> 1 -5.83561e+01 16.98700000
#> 2 -4.06991e+00  1.21143000
#> 3  1.51531e-01 -0.01604710
#> 4  1.49836e-04  0.00063828

get_gradients(file.path("models", "onecmt", "run001", "run001.grd"))
#>   iteration method         TVCL          TVV        TVKA     OM1_TVCL
#> 1         0   FOCE -95.24010000 -1.54473e+02 -50.3937000 -1.85651e+01
#> 2         5   FOCE  -5.65185000 -1.31776e+01  -2.3672200 -1.17689e+00
#> 3        10   FOCE  -0.05381990 -1.24398e+00  -0.2432470  2.56664e-02
#> 4        13   FOCE   0.00312907 -8.27509e-04   0.0013005  1.92388e-04
#>        OM2_TVV   SIGMA_1_1
#> 1 -5.83561e+01 16.98700000
#> 2 -4.06991e+00  1.21143000
#> 3  1.51531e-01 -0.01604710
#> 4  1.49836e-04  0.00063828
```

``` r
get_gradients(file.path("models", "onecmt", "run002"))
#>   iteration method         TVCL          TVV         TVKA     OM1_TVCL
#> 1         0   FOCE -2.38364e-01  4.34772e-01 -3.34223e-01  3.33661e-02
#> 2         5   FOCE  1.23194e+00 -9.14972e-01  3.77112e-01 -4.11332e-01
#> 3        10   FOCE  1.84041e-03 -2.25898e-03 -2.12048e-03  2.22174e-03
#> 4        15   FOCE  2.41066e-05  1.73623e-05  3.20979e-06  2.26613e-06
#>        OM2_TVV     OM3_TVKA    SIGMA_1_1   SIGMA_2_2
#> 1  0.114883000 -2.04802e+00  0.340024000 1.11603e+00
#> 2  0.991775000  2.96604e-01  1.926170000 5.00827e-01
#> 3 -0.001427710  2.96243e-03  0.015992400 2.34632e-03
#> 4 -0.000111782 -4.43439e-05 -0.000122955 1.27956e-05

get_gradients(file.path("models", "onecmt", "run002.mod"))
#>   iteration method         TVCL          TVV         TVKA     OM1_TVCL
#> 1         0   FOCE -2.38364e-01  4.34772e-01 -3.34223e-01  3.33661e-02
#> 2         5   FOCE  1.23194e+00 -9.14972e-01  3.77112e-01 -4.11332e-01
#> 3        10   FOCE  1.84041e-03 -2.25898e-03 -2.12048e-03  2.22174e-03
#> 4        15   FOCE  2.41066e-05  1.73623e-05  3.20979e-06  2.26613e-06
#>        OM2_TVV     OM3_TVKA    SIGMA_1_1   SIGMA_2_2
#> 1  0.114883000 -2.04802e+00  0.340024000 1.11603e+00
#> 2  0.991775000  2.96604e-01  1.926170000 5.00827e-01
#> 3 -0.001427710  2.96243e-03  0.015992400 2.34632e-03
#> 4 -0.000111782 -4.43439e-05 -0.000122955 1.27956e-05

get_gradients(file.path("models", "onecmt", "run002", "run002.grd"))
#>   iteration method         TVCL          TVV         TVKA     OM1_TVCL
#> 1         0   FOCE -2.38364e-01  4.34772e-01 -3.34223e-01  3.33661e-02
#> 2         5   FOCE  1.23194e+00 -9.14972e-01  3.77112e-01 -4.11332e-01
#> 3        10   FOCE  1.84041e-03 -2.25898e-03 -2.12048e-03  2.22174e-03
#> 4        15   FOCE  2.41066e-05  1.73623e-05  3.20979e-06  2.26613e-06
#>        OM2_TVV     OM3_TVKA    SIGMA_1_1   SIGMA_2_2
#> 1  0.114883000 -2.04802e+00  0.340024000 1.11603e+00
#> 2  0.991775000  2.96604e-01  1.926170000 5.00827e-01
#> 3 -0.001427710  2.96243e-03  0.015992400 2.34632e-03
#> 4 -0.000111782 -4.43439e-05 -0.000122955 1.27956e-05

get_gradients(file.path("models", "onecmt", "run002_metadata.json"))
#>   iteration method           X1           X2           X3           X4
#> 1         0   FOCE -2.38364e-01  4.34772e-01 -3.34223e-01  3.33661e-02
#> 2         5   FOCE  1.23194e+00 -9.14972e-01  3.77112e-01 -4.11332e-01
#> 3        10   FOCE  1.84041e-03 -2.25898e-03 -2.12048e-03  2.22174e-03
#> 4        15   FOCE  2.41066e-05  1.73623e-05  3.20979e-06  2.26613e-06
#>             X5           X6           X7          X8
#> 1  0.114883000 -2.04802e+00  0.340024000 1.11603e+00
#> 2  0.991775000  2.96604e-01  1.926170000 5.00827e-01
#> 3 -0.001427710  2.96243e-03  0.015992400 2.34632e-03
#> 4 -0.000111782 -4.43439e-05 -0.000122955 1.27956e-05
```
