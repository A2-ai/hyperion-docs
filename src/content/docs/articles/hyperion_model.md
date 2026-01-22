---
title: "Hyperion Model"
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

# Hyperion Model object

``` r
mod <- read_model(file.path(test_data_dir, "mod", "1001.mod"))
mod
```

<strong>NONMEM Model: 1001</strong>

<strong>Problem:</strong> PK Structural Model

<strong>Run Status:</strong> Not Run

<strong>Dataset:</strong> ../../../../data/derived/PK_Oral_Ex1.csv

<strong>Ignore:</strong> @

<strong>Theta Parameters</strong>

<table class="table table-striped">

<thead>

<tr>

<th style="text-align:left;">

Parameter
</th>

<th style="text-align:right;">

Initial
</th>

<th style="text-align:right;">

Lower
</th>

<th style="text-align:left;">

Fixed
</th>

<th style="text-align:left;">

Comment
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

THETA1
</td>

<td style="text-align:right;">

19
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

CL/F (L/h)
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA2
</td>

<td style="text-align:right;">

304
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

VC/F (L)
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA3
</td>

<td style="text-align:right;">

2
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

KA (1/hr)
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA4
</td>

<td style="text-align:right;">

1
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

F1 (fraction)
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

<th style="text-align:right;">

Initial
</th>

<th style="text-align:left;">

Fixed
</th>

<th style="text-align:left;">

Comment
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

OMEGA(1,1)
</td>

<td style="text-align:right;">

0.1
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

OM1 CL :EXP
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,2)
</td>

<td style="text-align:right;">

0.1
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

OM2 VC :EXP
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(3,3)
</td>

<td style="text-align:right;">

0.1
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

OM3 KA :EXP
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

<th style="text-align:right;">

Initial
</th>

<th style="text-align:left;">

Fixed
</th>

<th style="text-align:left;">

Comment
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

SIGMA(1,1)
</td>

<td style="text-align:right;">

0.1
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

SIG1
</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(2,2)
</td>

<td style="text-align:right;">

2
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

SIG2
</td>

</tr>

</tbody>

</table>

``` r

mod <- read_model(file.path(test_data_dir, "models", "onecmt", "run002b001.mod"))
mod
```

<strong>NONMEM Model: run002b001</strong>

<strong>Problem:</strong> Base one-compartment oral absorption model
created from pharos see run002b001_metadata.json for details.

<strong>Run Status:</strong> Not Run

<strong>Dataset:</strong> ../../data/derived/onecmpt-oral-30ind.csv

<strong>Ignore:</strong> @

<strong>Theta Parameters</strong>

<table class="table table-striped">

<thead>

<tr>

<th style="text-align:left;">

Parameter
</th>

<th style="text-align:right;">

Initial
</th>

<th style="text-align:right;">

Lower
</th>

<th style="text-align:left;">

Fixed
</th>

<th style="text-align:left;">

Comment
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

THETA1
</td>

<td style="text-align:right;">

1.247
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

TVCL (L/hr)
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA2
</td>

<td style="text-align:right;">

40.85
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

TVV (L)
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA3
</td>

<td style="text-align:right;">

1.244
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

TVKA (1/hr)
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

<th style="text-align:right;">

Initial
</th>

<th style="text-align:left;">

Fixed
</th>

<th style="text-align:left;">

Comment
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

OMEGA(1,1)
</td>

<td style="text-align:right;">

0.1304
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

OM1 TVCL :EXP
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,2)
</td>

<td style="text-align:right;">

0.1363
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

OM2 TVV :EXP
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(3,3)
</td>

<td style="text-align:right;">

0.114
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

OM3 TVKA :EXP
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

<th style="text-align:right;">

Initial
</th>

<th style="text-align:left;">

Fixed
</th>

<th style="text-align:left;">

Comment
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

SIGMA(1,1)
</td>

<td style="text-align:right;">

0.04812
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

SIG1 Proportional error (variance, 20% CV)
</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(2,2)
</td>

<td style="text-align:right;">

0.0059
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

SIG2 Additive error (variance, 0.01 mg/L SD)
</td>

</tr>

</tbody>

</table>

``` r

mod_nm <- read_model(file.path(test_data_dir, "mod", "nmexample.mod"))
mod_nm
```

<strong>NONMEM Model: nmexample</strong>

<strong>Problem:</strong> RUN# Example 1 (from samp5l)

<strong>Run Status:</strong> Not Run

<strong>Dataset:</strong> example1.csv

<strong>Ignore:</strong> C

<strong>Aliased Columns:</strong> CONC → DV, DOSE → AMT

<strong>Theta Parameters</strong>

<table class="table table-striped">

<thead>

<tr>

<th style="text-align:left;">

Parameter
</th>

<th style="text-align:right;">

Initial
</th>

<th style="text-align:right;">

Lower
</th>

<th style="text-align:left;">

Fixed
</th>

<th style="text-align:left;">

Comment
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

THETA1
</td>

<td style="text-align:right;">

2
</td>

<td style="text-align:right;">

0.001
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[LN(CL)\]
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA2
</td>

<td style="text-align:right;">

2
</td>

<td style="text-align:right;">

0.001
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[LN(V1)\]
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA3
</td>

<td style="text-align:right;">

2
</td>

<td style="text-align:right;">

0.001
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[LN(Q)\]
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA4
</td>

<td style="text-align:right;">

2
</td>

<td style="text-align:right;">

0.001
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[LN(V2)\]
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

<th style="text-align:right;">

Initial
</th>

<th style="text-align:left;">

Fixed
</th>

<th style="text-align:left;">

Comment
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

OMEGA(1,1)
</td>

<td style="text-align:right;">

0.15
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[P\]
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,1)
</td>

<td style="text-align:right;">

0.01
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[F\]
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,2)
</td>

<td style="text-align:right;">

0.15
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[P\]
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(3,1)
</td>

<td style="text-align:right;">

0.01
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[F\]
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(3,2)
</td>

<td style="text-align:right;">

0.01
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[F\]
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(3,3)
</td>

<td style="text-align:right;">

0.15
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[P\]
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(4,1)
</td>

<td style="text-align:right;">

0.01
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[F\]
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(4,2)
</td>

<td style="text-align:right;">

0.01
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[F\]
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(4,3)
</td>

<td style="text-align:right;">

0.01
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[F\]
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(4,4)
</td>

<td style="text-align:right;">

0.15
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[P\]
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

<th style="text-align:right;">

Initial
</th>

<th style="text-align:left;">

Fixed
</th>

<th style="text-align:left;">

Comment
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

SIGMA(1,1)
</td>

<td style="text-align:right;">

0.6
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

\[P\]
</td>

</tr>

</tbody>

</table>

``` r

mod_e <- read_model(file.path(test_data_dir, "mod", "everything.mod"))
mod_e
```

<strong>NONMEM Model: everything</strong>

<strong>Problem:</strong> Some header \#2

<strong>Run Status:</strong> Not Run

<strong>Dataset:</strong> ...csv

<strong>Ignore:</strong> \#, DVID.EQ.3, ID.EQ.3.14

<strong>Records:</strong> 200

<strong>Dropped Columns:</strong> DATE

<strong>Aliased Columns:</strong> AMT → DOSE

<strong>Theta Parameters</strong>

<table class="table table-striped">

<thead>

<tr>

<th style="text-align:left;">

Parameter
</th>

<th style="text-align:right;">

Initial
</th>

<th style="text-align:right;">

Lower
</th>

<th style="text-align:right;">

Upper
</th>

<th style="text-align:left;">

Fixed
</th>

<th style="text-align:left;">

Comment
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

THETA1
</td>

<td style="text-align:right;">

1.5
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

THETA(1) and THETA(2)
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA2
</td>

<td style="text-align:right;">

0.5
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:right;">

2
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

THETA(1) and THETA(2)
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA3
</td>

<td style="text-align:right;">

2.3
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

THETA(3)
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA4
</td>

<td style="text-align:right;">

0.8
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

THETA(4) and THETA(5)
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA5
</td>

<td style="text-align:right;">

0.25
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

THETA(4) and THETA(5)
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA6
</td>

<td style="text-align:right;">

2.3
</td>

<td style="text-align:right;">

1
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

THETA(6)
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA7
</td>

<td style="text-align:right;">

0.75
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

THETA(7)
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

<th style="text-align:right;">

Initial
</th>

<th style="text-align:right;">

Lower
</th>

<th style="text-align:right;">

Upper
</th>

<th style="text-align:left;">

Fixed
</th>

<th style="text-align:left;">

Parametrization
</th>

<th style="text-align:left;">

Comment
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

OMEGA(1,1)
</td>

<td style="text-align:right;">

0.04
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

ETA(1) - CL (diagonal)
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,2)
</td>

<td style="text-align:right;">

0.17
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(3,3)
</td>

<td style="text-align:right;">

0.2
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

ETA(2) - V (SD)
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(4,3)
</td>

<td style="text-align:right;">

0.3
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

ETA(2)-ETA(3) correlation, ETA(3) - KA (SD)
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(4,4)
</td>

<td style="text-align:right;">

0.15
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

ETA(2)-ETA(3) correlation, ETA(3) - KA (SD)
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(5,5)
</td>

<td style="text-align:right;">

0.2
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

ETA(2) - V (SD)
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(6,5)
</td>

<td style="text-align:right;">

0.3
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

ETA(2)-ETA(3) correlation, ETA(3) - KA (SD)
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(6,6)
</td>

<td style="text-align:right;">

0.15
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

ETA(2)-ETA(3) correlation, ETA(3) - KA (SD)
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(7,7)
</td>

<td style="text-align:right;">

0.1
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:right;">

1
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

ETA(6) - fixed diagonal
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

<th style="text-align:right;">

Initial
</th>

<th style="text-align:left;">

Fixed
</th>

<th style="text-align:left;">

Comment
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

SIGMA(1,1)
</td>

<td style="text-align:right;">

0.01
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Proportional error variance
</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(2,1)
</td>

<td style="text-align:right;">

0.002
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Prop-Add covariance, Additive error variance
</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(2,2)
</td>

<td style="text-align:right;">

0.25
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Prop-Add covariance, Additive error variance
</td>

</tr>

</tbody>

</table>

``` r
names(mod)
#>  [1] "problem"          "input_columns"    "data"             "subroutines"     
#>  [5] "theta_parameters" "omega_blocks"     "sigma_blocks"     "estimations"     
#>  [9] "tables"           "simulation"       "filename"

attributes(mod) |> names()
#> [1] "names"         "_tokens"       "_token_ranges" "model_source" 
#> [5] "run_status"    "class"
```

``` r
read_model(file.path(test_data_dir, "models", "onecmt", "run001.mod")) |>
  check_dataset(file.path(test_data_dir, "models", "onecmt"))
#> $canonical_path
#> [1] "/private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/data/derived/onecmpt-oral-30ind.csv"
#> 
#> $blake3_hash
#> [1] "8d8189cfc45dc4d56c295ca990a131e086f53d874aa91e730c1e8856e840b005"

read_model(file.path(test_data_dir, "models", "onecmt", "run002.mod")) |>
  check_dataset(file.path(test_data_dir, "models", "onecmt"))
#> $canonical_path
#> [1] "/private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/data/derived/onecmpt-oral-30ind.csv"
#> 
#> $blake3_hash
#> [1] "8d8189cfc45dc4d56c295ca990a131e086f53d874aa91e730c1e8856e840b005"

read_model(file.path(test_data_dir, "models", "onecmt", "run003.mod")) |>
  check_dataset(file.path(test_data_dir, "models", "onecmt"))
#> $canonical_path
#> [1] "/private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/data/derived/onecmpt-oral-30ind.csv"
#> 
#> $blake3_hash
#> [1] "8d8189cfc45dc4d56c295ca990a131e086f53d874aa91e730c1e8856e840b005"
```

``` r
check_model(file.path(test_data_dir, "models", "onecmt", "run001.mod"))
#> [1] "NMTRAN.exe not found at: \"/opt/nonmem/nm760/tr/NMTRAN.exe\""
```

``` r
get_model_summary(file.path(test_data_dir, "models", "onecmt", "run003"))
```

<strong>Model Summary: run003</strong>

<strong>Problem:</strong> Base one-compartment oral absorption model
created from pharos see run003_metadata.json for details.

<strong>Records: 240 \| Observations: 210 \| Subjects: 30</strong>

<strong>Final OFV:</strong> -109.8

<strong>Estimation Methods</strong>

- <strong>First Order Conditional Estimation with Interaction</strong>
  - Condition Number: 6.172

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

1.325
</td>

<td style="text-align:right;">

0.1115
</td>

<td style="text-align:right;">

8.411
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

40.16
</td>

<td style="text-align:right;">

2.839
</td>

<td style="text-align:right;">

7.069
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

1.212
</td>

<td style="text-align:right;">

0.1097
</td>

<td style="text-align:right;">

9.057
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

0.1223
</td>

<td style="text-align:right;">

0.05036
</td>

<td style="text-align:right;">

41.16
</td>

<td style="text-align:right;">

13.14
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

0.07454
</td>

<td style="text-align:right;">

0.03134
</td>

<td style="text-align:right;">

42.04
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

0.1239
</td>

<td style="text-align:right;">

0.03675
</td>

<td style="text-align:right;">

29.66
</td>

<td style="text-align:right;">

4.631
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

0.1224
</td>

<td style="text-align:right;">

0.05628
</td>

<td style="text-align:right;">

45.97
</td>

<td style="text-align:right;">

24.34
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

0.03754
</td>

<td style="text-align:right;">

0.006035
</td>

<td style="text-align:right;">

16.08
</td>

<td style="text-align:right;">

14.42
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

0.005272
</td>

<td style="text-align:right;">

0.009211
</td>

<td style="text-align:right;">

<span style="color: #DD0000;">174.7</span>
</td>

<td style="text-align:right;">

14.42
</td>

<td style="text-align:left;">

No
</td>

</tr>

</tbody>

</table>

## model summary can be generated from model object

``` r
mod <- read_model(file.path(test_data_dir, "models", "onecmt", "run003.mod"))
mod |>
    get_model_summary()
```

<strong>Model Summary: run003</strong>

<strong>Problem:</strong> Base one-compartment oral absorption model
created from pharos see run003_metadata.json for details.

<strong>Records: 240 \| Observations: 210 \| Subjects: 30</strong>

<strong>Final OFV:</strong> -109.8

<strong>Estimation Methods</strong>

- <strong>First Order Conditional Estimation with Interaction</strong>
  - Condition Number: 6.172

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

1.325
</td>

<td style="text-align:right;">

0.1115
</td>

<td style="text-align:right;">

8.411
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

40.16
</td>

<td style="text-align:right;">

2.839
</td>

<td style="text-align:right;">

7.069
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

1.212
</td>

<td style="text-align:right;">

0.1097
</td>

<td style="text-align:right;">

9.057
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

0.1223
</td>

<td style="text-align:right;">

0.05036
</td>

<td style="text-align:right;">

41.16
</td>

<td style="text-align:right;">

13.14
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

0.07454
</td>

<td style="text-align:right;">

0.03134
</td>

<td style="text-align:right;">

42.04
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

0.1239
</td>

<td style="text-align:right;">

0.03675
</td>

<td style="text-align:right;">

29.66
</td>

<td style="text-align:right;">

4.631
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

0.1224
</td>

<td style="text-align:right;">

0.05628
</td>

<td style="text-align:right;">

45.97
</td>

<td style="text-align:right;">

24.34
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

0.03754
</td>

<td style="text-align:right;">

0.006035
</td>

<td style="text-align:right;">

16.08
</td>

<td style="text-align:right;">

14.42
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

0.005272
</td>

<td style="text-align:right;">

0.009211
</td>

<td style="text-align:right;">

<span style="color: #DD0000;">174.7</span>
</td>

<td style="text-align:right;">

14.42
</td>

<td style="text-align:left;">

No
</td>

</tr>

</tbody>

</table>

## parameters can be retrieved with model

``` r
mod |> get_parameters()
#>    kind       name random_effect    estimate        sd     corr     stderr
#> 1 THETA       TVCL          <NA>  1.32542000        NA       NA 0.11148400
#> 2 THETA        TVV          <NA> 40.16250000        NA       NA 2.83899000
#> 3 THETA       TVKA          <NA>  1.21172000        NA       NA 0.10974700
#> 4 OMEGA OM1 (TVCL)          ETA1  0.12234200 0.3497740       NA 0.05035540
#> 5 OMEGA OMEGA(2,1)     ETA1:ETA2  0.07454330        NA 0.605513 0.03133500
#> 6 OMEGA  OM2 (TVV)          ETA2  0.12387800 0.3519630       NA 0.03674650
#> 7 OMEGA OM3 (TVKA)          ETA3  0.12241200 0.3498740       NA 0.05627810
#> 8 SIGMA SIGMA(1,1)          EPS1  0.03753710 0.1937450       NA 0.00603493
#> 9 SIGMA SIGMA(2,2)          EPS2  0.00527228 0.0726105       NA 0.00921096
#>          rse shrinkage fixed diagonal
#> 1   8.411221        NA FALSE       NA
#> 2   7.068758        NA FALSE       NA
#> 3   9.057125        NA FALSE       NA
#> 4  41.159536  13.14400 FALSE     TRUE
#> 5  42.035971        NA FALSE    FALSE
#> 6  29.663459   4.63131 FALSE     TRUE
#> 7  45.974333  24.33760 FALSE     TRUE
#> 8  16.077241  14.42190 FALSE     TRUE
#> 9 174.705441  14.42190 FALSE     TRUE
```

## parameter info can be retrieved with model

``` r
mod |> get_model_parameter_info() |> audit_parameter_info()
```

<strong>Parameter Info Audit</strong>

<strong>Theta Sources</strong>

<table class="table table-striped">

<thead>

<tr>

<th style="text-align:left;">

parameter
</th>

<th style="text-align:left;">

name
</th>

<th style="text-align:left;">

display
</th>

<th style="text-align:left;">

description
</th>

<th style="text-align:left;">

unit
</th>

<th style="text-align:left;">

parameterization
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

THETA1
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA2
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA3
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

</tr>

</tbody>

</table>

<strong>Omega Sources</strong>

<table class="table table-striped">

<thead>

<tr>

<th style="text-align:left;">

parameter
</th>

<th style="text-align:left;">

name
</th>

<th style="text-align:left;">

display
</th>

<th style="text-align:left;">

description
</th>

<th style="text-align:left;">

parameterization
</th>

<th style="text-align:left;">

associated_theta
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

OMEGA(1,1)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,1)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,2)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(3,3)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

</tbody>

</table>

<strong>Sigma Sources</strong>

<table class="table table-striped">

<thead>

<tr>

<th style="text-align:left;">

parameter
</th>

<th style="text-align:left;">

name
</th>

<th style="text-align:left;">

display
</th>

<th style="text-align:left;">

description
</th>

<th style="text-align:left;">

parameterization
</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left;">

SIGMA(1,1)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(2,2)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/Rtmpv5J36i/temp_libpath635e2598589d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

</tr>

</tbody>

</table>

# Copy model

``` r
copy_model(
  from = file.path(test_data_dir, "models", "onecmt", "run003.mod"),
  to = file.path(test_data_dir, "models", "onecmt", "run003b2.mod"), #copies run003 to run003b1 with jittered parameters
  description = "Updating run003 to 003b1 with jittered params",
  jitter = 0.1,
  overwrite = TRUE,
  seed = 804
)
#> NULL
```

``` r
copy_model(
  from = file.path(test_data_dir, "models", "onecmt", "run002.mod"),
  to = file.path(test_data_dir, "models", "onecmt", "run002b001.mod"),
  update = c("theta", "omega"),
  jitter = c(sigma = 0.3), #jitters run002 sigma initial estimates
  description = "Jittering initial sigma estimates, using theta/omega final estimates. Adding covariate",
  overwrite = TRUE,
  seed = 804
)
#> NULL
```

## Copy model accepts hyperion model object

``` r
mod <- read_model(file.path(test_data_dir, "models", "onecmt", "run003.mod"))

mod |> 
    copy_model(
        to = file.path(test_data_dir, "models", "onecmt", "run003b2.mod"),
        update = "all",
        description = "Updating run003 with mod object",
        overwrite = TRUE,
        seed = 804831
    )
#> NULL
```

# Model Lineage

``` r
example_tree <- get_model_lineage(file.path(test_data_dir, "models", "onecmt"))

example_tree
```

<strong>Hyperion Model Tree</strong>

ℹ️ <strong>Models:</strong> 8

- <strong style="color:blue">run001</strong> <span style="color:gray">-
  Base model</span>
  - <span style="color:orange">run002</span> <span style="color:gray">-
    Adding COV step, unfixing eps(2)</span>
    - <span style="color:orange">run003</span>
      <span style="color:gray">- Jittering initial estimates</span>
      - <span style="color:green">run003b2</span>
        <span style="color:gray">- Updating run003 with mod
        object</span>
      - <span style="color:green">run003b1</span>
        <span style="color:gray">- Updating run003 to 003b1 with
        jittered params. …</span>
    - <span style="color:green">run002a</span>
      <span style="color:gray">- Some description about what makes
      run002a diffe…</span>
    - <span style="color:green">run002b001</span>
      <span style="color:gray">- Jittering initial sigma estimates,
      using theta/…</span>
  - <span style="color:green">run004</span> <span style="color:gray">-
    Updating run001 to run004 with jittered params …</span>

``` r
spec <- SummarySpec(
  pvalue_scientific = FALSE
)

example_tree |>
  apply_summary_spec(spec) |>
  make_summary_table()
```

<div id="chhwthgwkl" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#chhwthgwkl table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#chhwthgwkl thead, #chhwthgwkl tbody, #chhwthgwkl tfoot, #chhwthgwkl tr, #chhwthgwkl td, #chhwthgwkl th {
  border-style: none;
}
&#10;#chhwthgwkl p {
  margin: 0;
  padding: 0;
}
&#10;#chhwthgwkl .gt_table {
  display: table;
  border-collapse: collapse;
  line-height: normal;
  margin-left: auto;
  margin-right: auto;
  color: #333333;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  background-color: #FFFFFF;
  width: auto;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #A8A8A8;
  border-right-style: none;
  border-right-width: 2px;
  border-right-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #A8A8A8;
  border-left-style: none;
  border-left-width: 2px;
  border-left-color: #D3D3D3;
}
&#10;#chhwthgwkl .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#chhwthgwkl .gt_title {
  color: #333333;
  font-size: 125%;
  font-weight: initial;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-color: #FFFFFF;
  border-bottom-width: 0;
}
&#10;#chhwthgwkl .gt_subtitle {
  color: #333333;
  font-size: 85%;
  font-weight: initial;
  padding-top: 3px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-color: #FFFFFF;
  border-top-width: 0;
}
&#10;#chhwthgwkl .gt_heading {
  background-color: #FFFFFF;
  text-align: center;
  border-bottom-color: #FFFFFF;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
}
&#10;#chhwthgwkl .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#chhwthgwkl .gt_col_headings {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
}
&#10;#chhwthgwkl .gt_col_heading {
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: normal;
  text-transform: inherit;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
  vertical-align: bottom;
  padding-top: 5px;
  padding-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
  overflow-x: hidden;
}
&#10;#chhwthgwkl .gt_column_spanner_outer {
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: normal;
  text-transform: inherit;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 4px;
  padding-right: 4px;
}
&#10;#chhwthgwkl .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#chhwthgwkl .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#chhwthgwkl .gt_column_spanner {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  vertical-align: bottom;
  padding-top: 5px;
  padding-bottom: 5px;
  overflow-x: hidden;
  display: inline-block;
  width: 100%;
}
&#10;#chhwthgwkl .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#chhwthgwkl .gt_group_heading {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: initial;
  text-transform: inherit;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
  vertical-align: middle;
  text-align: left;
}
&#10;#chhwthgwkl .gt_empty_group_heading {
  padding: 0.5px;
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: initial;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  vertical-align: middle;
}
&#10;#chhwthgwkl .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#chhwthgwkl .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#chhwthgwkl .gt_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  margin: 10px;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #D3D3D3;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
  vertical-align: middle;
  overflow-x: hidden;
}
&#10;#chhwthgwkl .gt_stub {
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: initial;
  text-transform: inherit;
  border-right-style: solid;
  border-right-width: 2px;
  border-right-color: #D3D3D3;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#chhwthgwkl .gt_stub_row_group {
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: initial;
  text-transform: inherit;
  border-right-style: solid;
  border-right-width: 2px;
  border-right-color: #D3D3D3;
  padding-left: 5px;
  padding-right: 5px;
  vertical-align: top;
}
&#10;#chhwthgwkl .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#chhwthgwkl .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#chhwthgwkl .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#chhwthgwkl .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#chhwthgwkl .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#chhwthgwkl .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#chhwthgwkl .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#chhwthgwkl .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#chhwthgwkl .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#chhwthgwkl .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#chhwthgwkl .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#chhwthgwkl .gt_footnotes {
  color: #333333;
  background-color: #FFFFFF;
  border-bottom-style: none;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  border-left-style: none;
  border-left-width: 2px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 2px;
  border-right-color: #D3D3D3;
}
&#10;#chhwthgwkl .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#chhwthgwkl .gt_sourcenotes {
  color: #333333;
  background-color: #FFFFFF;
  border-bottom-style: none;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  border-left-style: none;
  border-left-width: 2px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 2px;
  border-right-color: #D3D3D3;
}
&#10;#chhwthgwkl .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#chhwthgwkl .gt_left {
  text-align: left;
}
&#10;#chhwthgwkl .gt_center {
  text-align: center;
}
&#10;#chhwthgwkl .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#chhwthgwkl .gt_font_normal {
  font-weight: normal;
}
&#10;#chhwthgwkl .gt_font_bold {
  font-weight: bold;
}
&#10;#chhwthgwkl .gt_font_italic {
  font-style: italic;
}
&#10;#chhwthgwkl .gt_super {
  font-size: 65%;
}
&#10;#chhwthgwkl .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#chhwthgwkl .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#chhwthgwkl .gt_indent_1 {
  text-indent: 5px;
}
&#10;#chhwthgwkl .gt_indent_2 {
  text-indent: 10px;
}
&#10;#chhwthgwkl .gt_indent_3 {
  text-indent: 15px;
}
&#10;#chhwthgwkl .gt_indent_4 {
  text-indent: 20px;
}
&#10;#chhwthgwkl .gt_indent_5 {
  text-indent: 25px;
}
&#10;#chhwthgwkl .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#chhwthgwkl div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="8" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">Run Summary</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="model">Model</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="based_on">Reference</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="description">Description</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="n_parameters">No. Params</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="condition_number">Cond. No.</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ofv">OFV</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="dofv"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Δ</mi></mrow><annotation encoding="application/x-tex">\Delta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Δ</span></span></span></span>OFV</span></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="pvalue">p-value</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr><td headers="model" class="gt_row gt_left">run001</td>
<td headers="based_on" class="gt_row gt_left"><br /></td>
<td headers="description" class="gt_row gt_left">Base model</td>
<td headers="n_parameters" class="gt_row gt_right">6</td>
<td headers="condition_number" class="gt_row gt_right">1.98</td>
<td headers="ofv" class="gt_row gt_right">−103.299</td>
<td headers="dofv" class="gt_row gt_right"><br /></td>
<td headers="pvalue" class="gt_row gt_left"><br /></td></tr>
    <tr><td headers="model" class="gt_row gt_left">run002</td>
<td headers="based_on" class="gt_row gt_left">run001</td>
<td headers="description" class="gt_row gt_left">Adding COV step, unfixing eps(2)</td>
<td headers="n_parameters" class="gt_row gt_right">8</td>
<td headers="condition_number" class="gt_row gt_right">29.6</td>
<td headers="ofv" class="gt_row gt_right">−103.468</td>
<td headers="dofv" class="gt_row gt_right">−0.169</td>
<td headers="pvalue" class="gt_row gt_left">0.919 (df = 2)</td></tr>
    <tr><td headers="model" class="gt_row gt_left">run003</td>
<td headers="based_on" class="gt_row gt_left">run002</td>
<td headers="description" class="gt_row gt_left">Jittering initial estimates</td>
<td headers="n_parameters" class="gt_row gt_right">9</td>
<td headers="condition_number" class="gt_row gt_right">6.17</td>
<td headers="ofv" class="gt_row gt_right">−109.826</td>
<td headers="dofv" class="gt_row gt_right">−6.358</td>
<td headers="pvalue" class="gt_row gt_left">0.0117 (df = 1)</td></tr>
    <tr><td headers="model" class="gt_row gt_left">run003b1</td>
<td headers="based_on" class="gt_row gt_left">run003</td>
<td headers="description" class="gt_row gt_left">Updating run003 to 003b1 with jittered params. Adding WT on V</td>
<td headers="n_parameters" class="gt_row gt_right">10</td>
<td headers="condition_number" class="gt_row gt_right"><br /></td>
<td headers="ofv" class="gt_row gt_right">−108.889</td>
<td headers="dofv" class="gt_row gt_right">0.937</td>
<td headers="pvalue" class="gt_row gt_left">1 (df = 1)</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> OFV = Objective Function Value; ΔOFV = change in OFV from reference model;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> Cond. No. = Condition Number; p-value from LRT (Likelihood Ratio Test); df =</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> degrees of freedom</td>
    </tr>
  </tfoot>
</table>
</div>
