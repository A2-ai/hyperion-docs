---
title: "Lst"
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
mod_sum <- get_model_summary(file.path(test_data_dir, "models", "onecmt", "run002"))
class(mod_sum)
#> [1] "hyperion_nonmem_summary"
mod_sum
```

<strong>Model Summary: run002</strong>

<strong>Problem:</strong> Base one-compartment oral absorption model

<strong>Records: 240 \| Observations: 210 \| Subjects: 30</strong>

<strong>Final OFV:</strong> -103.5

<strong>Estimation Methods</strong>

- <strong>First Order Conditional Estimation with Interaction</strong>
  - Condition Number: 29.63

<strong>Heuristic Checks</strong>

\[<span style="color:green">OK</span>\] Minimization Successful

\[<span style="color:green">OK</span>\] Covariance Step Successful

\[<span style="color:green">OK</span>\] No Eigenvalue Issues

\[<span style="color:green">OK</span>\] No Parameters Near Boundary

\[<span style="color:green">OK</span>\] No Hessian Resets

<strong>Theta Parameters</strong>

<table class="table table-striped">

<thead>

<tr>

<th style="text-align:left;">

Parameter
</th>

<th style="text-align:right;">

Estimate
</th>

<th style="text-align:right;">

SE
</th>

<th style="text-align:right;">

RSE (%)
</th>

<th style="text-align:left;">

Fixed
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

TVCL
</td>

<td style="text-align:right;">

1.247
</td>

<td style="text-align:right;">

0.1288
</td>

<td style="text-align:right;">

10.33
</td>

<td style="text-align:left;">

No
</td>

</tr>

<tr>

<td style="text-align:left;">

TVV
</td>

<td style="text-align:right;">

40.85
</td>

<td style="text-align:right;">

3.027
</td>

<td style="text-align:right;">

7.411
</td>

<td style="text-align:left;">

No
</td>

</tr>

<tr>

<td style="text-align:left;">

TVKA
</td>

<td style="text-align:right;">

1.244
</td>

<td style="text-align:right;">

0.1134
</td>

<td style="text-align:right;">

9.117
</td>

<td style="text-align:left;">

No
</td>

</tr>

</tbody>

</table>

<strong>Omega Parameters</strong>

<table class="table table-striped">

<thead>

<tr>

<th style="text-align:left;">

Parameter
</th>

<th style="text-align:left;">

Random Effect
</th>

<th style="text-align:right;">

Estimate
</th>

<th style="text-align:right;">

SE
</th>

<th style="text-align:right;">

RSE (%)
</th>

<th style="text-align:right;">

Shrinkage (%)
</th>

<th style="text-align:left;">

Fixed
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

OM1 (TVCL)
</td>

<td style="text-align:left;">

ETA1
</td>

<td style="text-align:right;">

0.1304
</td>

<td style="text-align:right;">

0.06019
</td>

<td style="text-align:right;">

46.15
</td>

<td style="text-align:right;">

18.06
</td>

<td style="text-align:left;">

No
</td>

</tr>

<tr>

<td style="text-align:left;">

OM2 (TVV)
</td>

<td style="text-align:left;">

ETA2
</td>

<td style="text-align:right;">

0.1363
</td>

<td style="text-align:right;">

0.03971
</td>

<td style="text-align:right;">

29.13
</td>

<td style="text-align:right;">

4.986
</td>

<td style="text-align:left;">

No
</td>

</tr>

<tr>

<td style="text-align:left;">

OM3 (TVKA)
</td>

<td style="text-align:left;">

ETA3
</td>

<td style="text-align:right;">

0.1144
</td>

<td style="text-align:right;">

0.06144
</td>

<td style="text-align:right;">

<span style="color: #DD0000;">53.71</span>
</td>

<td style="text-align:right;">

27.19
</td>

<td style="text-align:left;">

No
</td>

</tr>

</tbody>

</table>

<strong>Sigma Parameters</strong>

<table class="table table-striped">

<thead>

<tr>

<th style="text-align:left;">

Parameter
</th>

<th style="text-align:left;">

Random Effect
</th>

<th style="text-align:right;">

Estimate
</th>

<th style="text-align:right;">

SE
</th>

<th style="text-align:right;">

RSE (%)
</th>

<th style="text-align:right;">

Shrinkage (%)
</th>

<th style="text-align:left;">

Fixed
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

SIGMA(1,1)
</td>

<td style="text-align:left;">

EPS1
</td>

<td style="text-align:right;">

0.03723
</td>

<td style="text-align:right;">

0.0116
</td>

<td style="text-align:right;">

31.16
</td>

<td style="text-align:right;">

15.44
</td>

<td style="text-align:left;">

No
</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(2,2)
</td>

<td style="text-align:left;">

EPS2
</td>

<td style="text-align:right;">

0.006607
</td>

<td style="text-align:right;">

0.02792
</td>

<td style="text-align:right;">

<span style="color: #DD0000;">422.6</span>
</td>

<td style="text-align:right;">

15.44
</td>

<td style="text-align:left;">

No
</td>

</tr>

</tbody>

</table>
