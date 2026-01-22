---
title: "Grd"
pagefind: true
---

``` r
library(hyperion)
#> 
#> 
#> ── pharos configuration ────────────────────────────────────────────────────────
#> ✔ pharos.toml found: /Users/mattsmith/Documents/hyperion/vignettes/pharos.toml
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
test_data_dir <- system.file("extdata", package = "hyperion")
```

``` r
get_gradients(file.path(test_data_dir, "grd", "bql.grd"))  |> 
  slice_tail(n = 1) |> 
  summarize(any_zero = any(across(everything(), ~ .x == 0))) |> 
  pull(any_zero) |> 
  as.numeric()
#> [1] 1
```

``` r
get_gradients(file.path(test_data_dir, "models", "onecmt", "run001"))
#>   iteration method  GRD.THETA1.  GRD.THETA2. GRD.THETA3.    GRD.ETA1.
#> 1         0   FOCE -95.24010000 -1.54473e+02 -50.3937000 -1.85651e+01
#> 2         5   FOCE  -5.65185000 -1.31776e+01  -2.3672200 -1.17689e+00
#> 3        10   FOCE  -0.05381990 -1.24398e+00  -0.2432470  2.56664e-02
#> 4        13   FOCE   0.00312907 -8.27509e-04   0.0013005  1.92388e-04
#>      GRD.ETA2.   GRD.EPS1.
#> 1 -5.83561e+01 16.98700000
#> 2 -4.06991e+00  1.21143000
#> 3  1.51531e-01 -0.01604710
#> 4  1.49836e-04  0.00063828

get_gradients(file.path(test_data_dir, "models", "onecmt", "run001"))
#>   iteration method  GRD.THETA1.  GRD.THETA2. GRD.THETA3.    GRD.ETA1.
#> 1         0   FOCE -95.24010000 -1.54473e+02 -50.3937000 -1.85651e+01
#> 2         5   FOCE  -5.65185000 -1.31776e+01  -2.3672200 -1.17689e+00
#> 3        10   FOCE  -0.05381990 -1.24398e+00  -0.2432470  2.56664e-02
#> 4        13   FOCE   0.00312907 -8.27509e-04   0.0013005  1.92388e-04
#>      GRD.ETA2.   GRD.EPS1.
#> 1 -5.83561e+01 16.98700000
#> 2 -4.06991e+00  1.21143000
#> 3  1.51531e-01 -0.01604710
#> 4  1.49836e-04  0.00063828

get_gradients(file.path(test_data_dir, "models", "onecmt", "run001", "run001.grd"))
#>   iteration method  GRD.THETA1.  GRD.THETA2. GRD.THETA3.    GRD.ETA1.
#> 1         0   FOCE -95.24010000 -1.54473e+02 -50.3937000 -1.85651e+01
#> 2         5   FOCE  -5.65185000 -1.31776e+01  -2.3672200 -1.17689e+00
#> 3        10   FOCE  -0.05381990 -1.24398e+00  -0.2432470  2.56664e-02
#> 4        13   FOCE   0.00312907 -8.27509e-04   0.0013005  1.92388e-04
#>      GRD.ETA2.   GRD.EPS1.
#> 1 -5.83561e+01 16.98700000
#> 2 -4.06991e+00  1.21143000
#> 3  1.51531e-01 -0.01604710
#> 4  1.49836e-04  0.00063828
```

``` r
get_gradients(file.path(test_data_dir, "models", "onecmt", "run002"))
#>   iteration method    GRD.TVCL.     GRD.TVV.    GRD.TVKA. GRD.OM1..TVCL..
#> 1         0   FOCE -2.38364e-01  4.34772e-01 -3.34223e-01     3.33661e-02
#> 2         5   FOCE  1.23194e+00 -9.14972e-01  3.77112e-01    -4.11332e-01
#> 3        10   FOCE  1.84041e-03 -2.25898e-03 -2.12048e-03     2.22174e-03
#> 4        15   FOCE  2.41066e-05  1.73623e-05  3.20979e-06     2.26613e-06
#>   GRD.OM2..TVV.. GRD.OM3..TVKA..    GRD.EPS1.   GRD.EPS2.
#> 1    0.114883000    -2.04802e+00  0.340024000 1.11603e+00
#> 2    0.991775000     2.96604e-01  1.926170000 5.00827e-01
#> 3   -0.001427710     2.96243e-03  0.015992400 2.34632e-03
#> 4   -0.000111782    -4.43439e-05 -0.000122955 1.27956e-05

get_gradients(file.path(test_data_dir, "models", "onecmt", "run002.mod"))
#>   iteration method       GRD.1.       GRD.2.       GRD.3.       GRD.4.
#> 1         0   FOCE -2.38364e-01  4.34772e-01 -3.34223e-01  3.33661e-02
#> 2         5   FOCE  1.23194e+00 -9.14972e-01  3.77112e-01 -4.11332e-01
#> 3        10   FOCE  1.84041e-03 -2.25898e-03 -2.12048e-03  2.22174e-03
#> 4        15   FOCE  2.41066e-05  1.73623e-05  3.20979e-06  2.26613e-06
#>         GRD.5.       GRD.6.       GRD.7.      GRD.8.
#> 1  0.114883000 -2.04802e+00  0.340024000 1.11603e+00
#> 2  0.991775000  2.96604e-01  1.926170000 5.00827e-01
#> 3 -0.001427710  2.96243e-03  0.015992400 2.34632e-03
#> 4 -0.000111782 -4.43439e-05 -0.000122955 1.27956e-05

get_gradients(file.path(test_data_dir, "models", "onecmt", "run002", "run002.grd"))
#>   iteration method    GRD.TVCL.     GRD.TVV.    GRD.TVKA. GRD.OM1..TVCL..
#> 1         0   FOCE -2.38364e-01  4.34772e-01 -3.34223e-01     3.33661e-02
#> 2         5   FOCE  1.23194e+00 -9.14972e-01  3.77112e-01    -4.11332e-01
#> 3        10   FOCE  1.84041e-03 -2.25898e-03 -2.12048e-03     2.22174e-03
#> 4        15   FOCE  2.41066e-05  1.73623e-05  3.20979e-06     2.26613e-06
#>   GRD.OM2..TVV.. GRD.OM3..TVKA..    GRD.EPS1.   GRD.EPS2.
#> 1    0.114883000    -2.04802e+00  0.340024000 1.11603e+00
#> 2    0.991775000     2.96604e-01  1.926170000 5.00827e-01
#> 3   -0.001427710     2.96243e-03  0.015992400 2.34632e-03
#> 4   -0.000111782    -4.43439e-05 -0.000122955 1.27956e-05

get_gradients(file.path(test_data_dir, "models", "onecmt", "run002_metadata.json"))
#>   iteration method       GRD.1.       GRD.2.       GRD.3.       GRD.4.
#> 1         0   FOCE -2.38364e-01  4.34772e-01 -3.34223e-01  3.33661e-02
#> 2         5   FOCE  1.23194e+00 -9.14972e-01  3.77112e-01 -4.11332e-01
#> 3        10   FOCE  1.84041e-03 -2.25898e-03 -2.12048e-03  2.22174e-03
#> 4        15   FOCE  2.41066e-05  1.73623e-05  3.20979e-06  2.26613e-06
#>         GRD.5.       GRD.6.       GRD.7.      GRD.8.
#> 1  0.114883000 -2.04802e+00  0.340024000 1.11603e+00
#> 2  0.991775000  2.96604e-01  1.926170000 5.00827e-01
#> 3 -0.001427710  2.96243e-03  0.015992400 2.34632e-03
#> 4 -0.000111782 -4.43439e-05 -0.000122955 1.27956e-05
```
