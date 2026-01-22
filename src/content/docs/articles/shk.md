---
title: "Shk"
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
test_data_dir <- system.file("extdata", package = "hyperion")
```

``` r
get_eta_shrinkage(file.path(test_data_dir, "shk", "3068.shk"))
#>   method subpop eta_number     etabar etabar_se etabar_pval shrinkage_sd
#> 1   FOCE      1          1  0.0000000 0.0000000          -1  0.00000e+00
#> 2   FOCE      1          2  0.0237710 0.0913935          -1  4.31620e+00
#> 3   FOCE      1          3 -0.0796227 0.0581043          -1  2.54950e+01
#> 4   FOCE      1          4  0.0000000 0.0000000          -1  0.00000e+00
#> 5   FOCE      2          1  0.0000000 0.0000000          -1  0.00000e+00
#> 6   FOCE      2          2  0.0160635 0.0612727          -1  2.01072e+00
#> 7   FOCE      2          3  0.0336938 0.0544894          -1  1.00000e-10
#> 8   FOCE      2          4  0.0000000 0.0000000          -1  0.00000e+00
#>   shrinkage_vr rel_info ebv_shrinkage_sd ebv_shrinkage_vr n_individuals
#> 1  0.00000e+00   0.0000        0.0000000         0.000000            15
#> 2  8.44611e+00  99.8320        0.0840177         0.167965            15
#> 3  4.44901e+01  98.9961        0.5031960         1.003860            15
#> 4  0.00000e+00   0.0000        0.0000000         0.000000            15
#> 5  0.00000e+00   0.0000        0.0000000         0.000000            35
#> 6  3.98102e+00  99.8591        0.0703129         0.140576            35
#> 7  1.00000e-10  99.5060        0.2471630         0.493716            35
#> 8  0.00000e+00   0.0000        0.0000000         0.000000            35
```

``` r
get_eps_shrinkage(file.path(test_data_dir, "shk", "3068.shk"))
#>   method subpop eps_number shrinkage_sd shrinkage_vr n_individuals
#> 1   FOCE      1          1     0.690562      1.37636            15
#> 2   FOCE      1          2   100.000000    100.00000            15
#> 3   FOCE      2          1     2.182010      4.31641            35
#> 4   FOCE      2          2   100.000000    100.00000            35
```

``` r
get_eta_shrinkage(file.path(test_data_dir, "shk", "bql.shk"))
#>   method subpop eta_number       etabar  etabar_se etabar_pval shrinkage_sd
#> 1   FOCE      1          1  0.000801602 0.02268020    0.971806     0.666197
#> 2   FOCE      1          2 -0.000218944 0.01334130    0.986906     2.317320
#> 3   FOCE      1          3 -0.000308648 0.00618609    0.960207    18.695000
#>   shrinkage_vr rel_info ebv_shrinkage_sd ebv_shrinkage_vr n_individuals
#> 1      1.32796  98.9891         0.492543          0.98266           193
#> 2      4.58094  94.3077         2.148600          4.25104           193
#> 3     33.89500  65.0838        18.702700         33.90750           193
```

``` r
get_eps_shrinkage(file.path(test_data_dir, "shk", "bql.shk"))
#>   method subpop eps_number shrinkage_sd shrinkage_vr n_individuals
#> 1   FOCE      1          1      9.70268      18.4639           193
```

``` r
get_eta_shrinkage(file.path(test_data_dir, "shk", "itsimp.shk"))
#>   method subpop eta_number       etabar  etabar_se etabar_pval shrinkage_sd
#> 1    ITS      1          1 -4.25284e-08 0.00471323    0.999993      6.91515
#> 2    ITS      1          2 -5.31037e-08 0.00298829    0.999986     32.91140
#> 3    ITS      1          3 -9.87707e-08 0.00294211    0.999973     41.05200
#> 4    ITS      1          4 -8.86959e-08 0.00369138    0.999981     25.07310
#> 5    IMP      1          1 -1.73309e-04 0.00472073    0.970714      6.96378
#> 6    IMP      1          2  1.85832e-04 0.00297941    0.950266     33.25240
#> 7    IMP      1          3 -1.82834e-04 0.00288863    0.949532     41.55920
#> 8    IMP      1          4 -2.16587e-04 0.00370010    0.953322     24.87670
#>   shrinkage_vr rel_info ebv_shrinkage_sd ebv_shrinkage_vr n_individuals
#> 1      13.3521       NA          6.91507          13.3520           400
#> 2      54.9912       NA         32.91120          54.9910           400
#> 3      65.2513       NA         41.05040          65.2494           400
#> 4      43.8596       NA         25.07240          43.8586           400
#> 5      13.4426       NA          6.95439          13.4251           400
#> 6      55.4475       NA         33.01970          55.1364           400
#> 7      65.8467       NA         41.41680          65.6801           400
#> 8      43.5649       NA         25.12010          43.9300           400
```

``` r
get_eps_shrinkage(file.path(test_data_dir, "shk", "itsimp.shk"))
#>   method subpop eps_number shrinkage_sd shrinkage_vr n_individuals
#> 1    ITS      1          1      26.1873      45.5168           400
#> 2    IMP      1          1      26.3813      45.8028           400
```
