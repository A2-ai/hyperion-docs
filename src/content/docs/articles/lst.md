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
get_run_info(
    read_model( 
        file.path(test_data_dir, "models", "onecmt", "run001.mod")
    )
)
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
get_run_info(
    read_model( 
        file.path(test_data_dir, "models", "onecmt", "run003b1.mod")
    )
)
#> $run_details
#>                                                                                                  problem
#> 1 Base one-compartment oral absorption model created from pharos see run003b1_metadata.json for details.
#>   number_data_records number_subjects number_obs postprocess_time
#> 1                 240              30        210             0.04
#>   function_evaluations significant_digits only_sim
#> 1                  297                  0    FALSE
#>                                     estimation_method estimation_time
#> 1 First Order Conditional Estimation with Interaction            0.39
#>   covariance_time
#> 1              NA
#> 
#> $run_heuristics
#>            heuristic_name value
#> 1 covariance_step_aborted    NA
#> 2       eigenvalue_issues    NA
#> 3 parameter_near_boundary  TRUE
#> 4           hessian_reset FALSE
#> 5 minimization_terminated FALSE
```

``` r
mod_sum <- summary(
    read_model(
        file.path(test_data_dir, "models", "onecmt", "run002.mod")
    )
)

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

``` r
mod_sum <- summary(
    read_model(
        file.path(test_data_dir, "models", "onecmt", "run003b1.mod")
    )
)

mod_sum
```

<strong>Model Summary: run003b1</strong>

<strong>Problem:</strong> Base one-compartment oral absorption model
created from pharos see run003b1_metadata.json for details.

<strong>Records: 240 \| Observations: 210 \| Subjects: 30</strong>

<strong>Final OFV:</strong> -108.9

<strong>Estimation Methods</strong>

- <strong>First Order Conditional Estimation with Interaction</strong>

<strong>Heuristic Checks</strong>

\[<span style="color:green">OK</span>\] Minimization Successful

\[<span style="color:orange">⚠</span>\] Covariance Step Not Run

\[<span style="color:orange">⚠</span>\] Eigenvalue Check Not Available

\[<span style="color:red">✖</span>\] Parameters Near Boundary

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

1.25
</td>

<td style="text-align:left;">

No
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA2
</td>

<td style="text-align:right;">

0.545
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

40.28
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

1.218
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

0.1233
</td>

<td style="text-align:right;">

13.66
</td>

<td style="text-align:left;">

No
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,1)
</td>

<td style="text-align:left;">

ETA1:ETA2
</td>

<td style="text-align:right;">

0.07218
</td>

<td style="text-align:right;">

NA
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

0.1246
</td>

<td style="text-align:right;">

4.625
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

0.1239
</td>

<td style="text-align:right;">

24.36
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

0.03735
</td>

<td style="text-align:right;">

14.51
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

0.005894
</td>

<td style="text-align:right;">

14.51
</td>

<td style="text-align:left;">

No
</td>

</tr>

</tbody>

</table>
