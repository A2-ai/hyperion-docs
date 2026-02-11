---
title: "Lst"
pagefind: true
---

``` r
library(hyperion)
#> 
#> 
#> ── pharos configuration ────────────────────────────────────────────────────────
#> ✔ pharos.toml found: /data/user-homes/matthews/Packages/hyperion/vignettes/pharos.toml
#> ── hyperion options ────────────────────────────────────────────────────────────
#> ✔ hyperion.significant_number_display : 4
#> ── hyperion nonmem object options ──────────────────────────────────────────────
#> ✔ hyperion.nonmem_model.show_included_columns : FALSE
#> ✔ hyperion.nonmem_summary.rse_threshold : 50
#> ✔ hyperion.nonmem_summary.shrinkage_threshold : 30

test_data_dir <- system.file("extdata", package = "hyperion")
```

# Parse lst

``` r
get_run_info(file.path(test_data_dir, "lst", "bql.lst"))$run_details
#>                          problem number_data_records number_subjects number_obs
#> 1 RUN# 2 - 2cmpt model - no BQLs                2895             193       2702
#>   postprocess_time function_evaluations significant_digits only_sim
#> 1             0.02                  208                  0    FALSE
#>                                     estimation_method estimation_time
#> 1 First Order Conditional Estimation with Interaction            2.36
#>   covariance_time
#> 1            2.54
```

``` r
get_run_info(file.path(test_data_dir, "lst", "bql.lst"))$run_heuristics
#>            heuristic_name value
#> 1 covariance_step_aborted FALSE
#> 2       eigenvalue_issues FALSE
#> 3 parameter_near_boundary FALSE
#> 4           hessian_reset FALSE
#> 5 minimization_terminated FALSE
```

``` r
get_run_info(file.path(test_data_dir, "lst", "saemimp.lst"))$run_details
#>                      problem number_data_records number_subjects number_obs
#> 1 RUN# example2 (from sampc)                2400             400       2000
#> 2 RUN# example2 (from sampc)                2400             400       2000
#>   postprocess_time function_evaluations significant_digits only_sim
#> 1                0                    0                  0    FALSE
#> 2                0                    0                  0    FALSE
#>                                      estimation_method estimation_time
#> 1    Stochastic Approximation Expectation-Maximization            0.55
#> 2 Objective Function Evaluation by Importance Sampling           25.71
#>   covariance_time
#> 1            0.02
#> 2           40.04
```

``` r
get_run_info(file.path(test_data_dir, "lst", "saemimp.lst"))$run_heuristics
#>            heuristic_name value
#> 1 covariance_step_aborted  TRUE
#> 2       eigenvalue_issues FALSE
#> 3 parameter_near_boundary FALSE
#> 4           hessian_reset FALSE
#> 5 minimization_terminated FALSE
```

``` r
get_run_info(file.path(test_data_dir, "models", "onecmt", "run001"))
#> $run_details
#>                                      problem number_data_records
#> 1 Base one-compartment oral absorption model                 240
#>   number_subjects number_obs postprocess_time function_evaluations
#> 1              30        210             0.04                  123
#>   significant_digits only_sim
#> 1                  0    FALSE
#>                                     estimation_method estimation_time
#> 1 First Order Conditional Estimation with Interaction            0.18
#>   covariance_time
#> 1            0.14
#> 
#> $run_heuristics
#>            heuristic_name value
#> 1 covariance_step_aborted FALSE
#> 2       eigenvalue_issues FALSE
#> 3 parameter_near_boundary FALSE
#> 4           hessian_reset FALSE
#> 5 minimization_terminated FALSE

get_run_info(file.path(test_data_dir, "models", "onecmt", "run001.mod"))
#> $run_details
#>                                      problem number_data_records
#> 1 Base one-compartment oral absorption model                 240
#>   number_subjects number_obs postprocess_time function_evaluations
#> 1              30        210             0.04                  123
#>   significant_digits only_sim
#> 1                  0    FALSE
#>                                     estimation_method estimation_time
#> 1 First Order Conditional Estimation with Interaction            0.18
#>   covariance_time
#> 1            0.14
#> 
#> $run_heuristics
#>            heuristic_name value
#> 1 covariance_step_aborted FALSE
#> 2       eigenvalue_issues FALSE
#> 3 parameter_near_boundary FALSE
#> 4           hessian_reset FALSE
#> 5 minimization_terminated FALSE

get_run_info(file.path(test_data_dir, "models", "onecmt", "run001", "run001.lst"))
#> $run_details
#>                                      problem number_data_records
#> 1 Base one-compartment oral absorption model                 240
#>   number_subjects number_obs postprocess_time function_evaluations
#> 1              30        210             0.04                  123
#>   significant_digits only_sim
#> 1                  0    FALSE
#>                                     estimation_method estimation_time
#> 1 First Order Conditional Estimation with Interaction            0.18
#>   covariance_time
#> 1            0.14
#> 
#> $run_heuristics
#>            heuristic_name value
#> 1 covariance_step_aborted FALSE
#> 2       eigenvalue_issues FALSE
#> 3 parameter_near_boundary FALSE
#> 4           hessian_reset FALSE
#> 5 minimization_terminated FALSE
```

``` r
get_run_info(file.path(test_data_dir, "models", "onecmt", "run002_metadata.json"))
#> $run_details
#>                                      problem number_data_records
#> 1 Base one-compartment oral absorption model                 240
#>   number_subjects number_obs postprocess_time function_evaluations
#> 1              30        210             0.07                  156
#>   significant_digits only_sim
#> 1                  0    FALSE
#>                                     estimation_method estimation_time
#> 1 First Order Conditional Estimation with Interaction            0.21
#>   covariance_time
#> 1            0.24
#> 
#> $run_heuristics
#>            heuristic_name value
#> 1 covariance_step_aborted FALSE
#> 2       eigenvalue_issues FALSE
#> 3 parameter_near_boundary FALSE
#> 4           hessian_reset FALSE
#> 5 minimization_terminated FALSE
```

``` r
mod_sum <- summary(file.path(test_data_dir, "models", "onecmt", "run002"))
class(mod_sum)
#> [1] "summaryDefault" "table"
mod_sum
#>    Length     Class      Mode 
#>         1 character character
```
