---
title: "Hyperion Model"
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
```

# Hyperion Model object

``` r
mod <- read_model(file.path("mod", "1001.mod"))
mod
```

<strong>NONMEM Model: 1001</strong>

<strong>Problem:</strong> PK Structural Model

<strong>Run Status:</strong> Not Run

<strong>Dataset:</strong> ../../../../data/derived/PK_Oral_Ex1.csv

<strong>Ignore:</strong> @

<strong>Aliased Columns:</strong> ATFD → TIME, ODV → DV

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

OM1 CL/F :EXP
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

OM2 VC/F :EXP
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

mod <- read_model(file.path("models", "onecmt", "run002b001.mod"))
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

mod_nm <- read_model(file.path("mod", "nmexample.mod"))
mod_nm
```

<strong>NONMEM Model: nmexample</strong>

<strong>Problem:</strong> RUN# Example 1 (from samp5l)

<strong>Run Status:</strong> Not Run

<strong>Dataset:</strong> example1.csv

<strong>Ignore:</strong> C

<strong>Aliased Columns:</strong> DV → CONC, AMT → DOSE

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

mod_e <- read_model(file.path("mod", "everything.mod"))
mod_e
```

<strong>NONMEM Model: everything</strong>

<strong>Problem:</strong> Some header \#2

<strong>Run Status:</strong> Not Run

<strong>Dataset:</strong> ..with spaces.csv

<strong>Ignore:</strong> \#, DVID.EQ.3, ID.EQ.3.14, DVID.EQ.3,
AGE.GE.18, AGE.GT.3, AGE.LT.100, AGE.LE.65, TYPE.NE.0, TYPE.EQ.1,
TYPE.EQN.1, TYPE.NEN.2, TYPE.EQ.1

<strong>Records:</strong> 200

<strong>Dropped Columns:</strong> DATE

<strong>Aliased Columns:</strong> DOSE → AMT

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

0.5
</td>

<td style="text-align:right;">

-Inf
</td>

<td style="text-align:right;">

10
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

THETA with -INF lower bound
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA4
</td>

<td style="text-align:right;">

5
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:right;">

Inf
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

THETA with INF upper bound
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA5
</td>

<td style="text-align:right;">

0.1
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Three identical THETAs
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA6
</td>

<td style="text-align:right;">

0.1
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Three identical THETAs
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA7
</td>

<td style="text-align:right;">

0.1
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Three identical THETAs
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA8
</td>

<td style="text-align:right;">

1.5
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:right;">

10
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Named THETA
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA9
</td>

<td style="text-align:right;">

0.5
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

NAMES syntax
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA10
</td>

<td style="text-align:right;">

10
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

NAMES syntax
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA11
</td>

<td style="text-align:right;">

2
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

NAMES syntax
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA12
</td>

<td style="text-align:right;">

1.1
</td>

<td style="text-align:right;">

1
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Three identical THETAs with NAMES
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA13
</td>

<td style="text-align:right;">

1.1
</td>

<td style="text-align:right;">

1
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Three identical THETAs with NAMES
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA14
</td>

<td style="text-align:right;">

1.1
</td>

<td style="text-align:right;">

1
</td>

<td style="text-align:right;">

NA
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Three identical THETAs with NAMES
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA15
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

THETA16
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

THETA17
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

THETA18
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

THETA19
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

0.01121
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(8,7)
</td>

<td style="text-align:right;">

0
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(8,8)
</td>

<td style="text-align:right;">

0.3387
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(9,9)
</td>

<td style="text-align:right;">

0.1
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

OMEGA(10,9)
</td>

<td style="text-align:right;">

0.01
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

OMEGA(10,10)
</td>

<td style="text-align:right;">

0.1
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

OMEGA(11,9)
</td>

<td style="text-align:right;">

0.01
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

OMEGA(11,10)
</td>

<td style="text-align:right;">

0.01
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

OMEGA(11,11)
</td>

<td style="text-align:right;">

0.1
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

OMEGA(12,9)
</td>

<td style="text-align:right;">

0.01
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

OMEGA(12,10)
</td>

<td style="text-align:right;">

0.01
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

OMEGA(12,11)
</td>

<td style="text-align:right;">

0.01
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

OMEGA(12,12)
</td>

<td style="text-align:right;">

0.1
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

OMEGA(13,13)
</td>

<td style="text-align:right;">

0.4
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

Label=Value syntax for diagonal
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(14,14)
</td>

<td style="text-align:right;">

0.3
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

OMEGA(15,14)
</td>

<td style="text-align:right;">

0.01
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

Label=Value syntax in block
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(15,15)
</td>

<td style="text-align:right;">

0.35
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

Label=Value syntax in block
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(16,16)
</td>

<td style="text-align:right;">

0.03
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

OMEGA(17,16)
</td>

<td style="text-align:right;">

0.01
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

OMEGA(17,17)
</td>

<td style="text-align:right;">

0.03
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

OMEGA(18,16)
</td>

<td style="text-align:right;">

0.01
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

OMEGA(18,17)
</td>

<td style="text-align:right;">

0.01
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

OMEGA(18,18)
</td>

<td style="text-align:right;">

0.03
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

OMEGA(19,16)
</td>

<td style="text-align:right;">

0.01
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

OMEGA(19,17)
</td>

<td style="text-align:right;">

0.01
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

OMEGA(19,18)
</td>

<td style="text-align:right;">

0.01
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

OMEGA(19,19)
</td>

<td style="text-align:right;">

0.03
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

OMEGA(20,20)
</td>

<td style="text-align:right;">

0.2
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(21,20)
</td>

<td style="text-align:right;">

0.3
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(21,21)
</td>

<td style="text-align:right;">

0.15
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(22,20)
</td>

<td style="text-align:right;">

0.1
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(22,21)
</td>

<td style="text-align:right;">

0.05
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(22,22)
</td>

<td style="text-align:right;">

0.3
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(23,23)
</td>

<td style="text-align:right;">

0.2
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(24,23)
</td>

<td style="text-align:right;">

0.3
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(24,24)
</td>

<td style="text-align:right;">

0.15
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(25,23)
</td>

<td style="text-align:right;">

0.1
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(25,24)
</td>

<td style="text-align:right;">

0.05
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(25,25)
</td>

<td style="text-align:right;">

0.3
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Correlation
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(26,26)
</td>

<td style="text-align:right;">

6
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(27,26)
</td>

<td style="text-align:right;">

0.005
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(27,27)
</td>

<td style="text-align:right;">

0.3
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(28,26)
</td>

<td style="text-align:right;">

0.001
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(28,27)
</td>

<td style="text-align:right;">

0.002
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(28,28)
</td>

<td style="text-align:right;">

0.1
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

</td>

<td style="text-align:left;">

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

<tr>

<td style="text-align:left;">

SIGMA(3,3)
</td>

<td style="text-align:right;">

1
</td>

<td style="text-align:left;">

<span style="color: #DD0000;">Yes</span>
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(4,4)
</td>

<td style="text-align:right;">

0.036
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(5,5)
</td>

<td style="text-align:right;">

0.04
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

Label=Value syntax for SIGMA
</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(6,6)
</td>

<td style="text-align:right;">

0.01
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

diagonal SIGMA
</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(7,7)
</td>

<td style="text-align:right;">

0.02
</td>

<td style="text-align:left;">

No
</td>

<td style="text-align:left;">

diagonal SIGMA
</td>

</tr>

</tbody>

</table>

``` r
names(mod)
#>  [1] "cst"           "tokens"        "problem"       "input_columns"
#>  [5] "data"          "thetas"        "omega_blocks"  "sigma_blocks" 
#>  [9] "estimations"   "tables"        "simulation"    "msfi"         
#> [13] "covariance"    "subroutines"   "abbreviated"   "pk"           
#> [17] "error"         "des"           "pred"

attributes(mod) |> names()
#> [1] "names"        "filename"     "model_source" "class"        "run_status"
```

``` r
read_model(file.path("models", "onecmt", "run001.mod")) |>
  check_dataset()
```

<strong>Dataset Check</strong>

<table>

<tbody>

<tr>

<td style="text-align:left;">

Path
</td>

<td style="text-align:left;">

data/derived/onecmpt-oral-30ind.csv
</td>

</tr>

<tr>

<td style="text-align:left;">

Hash
</td>

<td style="text-align:left;">

8d8189cfc45dc4d56c295ca990a131e086f53d874aa91e730c1e8856e840b005
</td>

</tr>

</tbody>

</table>

``` r

read_model(file.path("models", "onecmt", "run002.mod")) |>
  check_dataset()
```

<strong>Dataset Check</strong>

<table>

<tbody>

<tr>

<td style="text-align:left;">

Path
</td>

<td style="text-align:left;">

data/derived/onecmpt-oral-30ind.csv
</td>

</tr>

<tr>

<td style="text-align:left;">

Hash
</td>

<td style="text-align:left;">

8d8189cfc45dc4d56c295ca990a131e086f53d874aa91e730c1e8856e840b005
</td>

</tr>

</tbody>

</table>

``` r

read_model(file.path("models", "onecmt", "run003.mod")) |>
  check_dataset()
```

<strong>Dataset Check</strong>

<table>

<tbody>

<tr>

<td style="text-align:left;">

Path
</td>

<td style="text-align:left;">

data/derived/onecmpt-oral-30ind.csv
</td>

</tr>

<tr>

<td style="text-align:left;">

Hash
</td>

<td style="text-align:left;">

8d8189cfc45dc4d56c295ca990a131e086f53d874aa91e730c1e8856e840b005
</td>

</tr>

</tbody>

</table>

``` r
read_model(file.path("models", "onecmt", "run001.mod")) |>
  check_model()
```

    #> WARNINGS AND ERRORS (IF ANY) FOR PROBLEM    1
    #>
    #>  (WARNING  2) NM-TRAN INFERS THAT THE DATA ARE POPULATION.
    #>
    #> Note: Analytical 2nd Derivatives are constructed in FSUBS but are never used.
    #>       You may insert $ABBR DERIV2=NO after the first $PROB to save FSUBS construction and compilation time
    #> [1] 0

## model summary can be generated from model object

``` r
mod <- read_model(file.path("models", "onecmt", "run003.mod"))
mod |>
    summary()
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

OM1,2 (TVCL, TVV)
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
#>    kind              name random_effect    estimate        sd     corr
#> 1 THETA              TVCL          <NA>  1.32542000        NA       NA
#> 2 THETA               TVV          <NA> 40.16250000        NA       NA
#> 3 THETA              TVKA          <NA>  1.21172000        NA       NA
#> 4 OMEGA        OM1 (TVCL)          ETA1  0.12234200 0.3497740       NA
#> 5 OMEGA OM1,2 (TVCL, TVV)     ETA1:ETA2  0.07454330        NA 0.605513
#> 6 OMEGA         OM2 (TVV)          ETA2  0.12387800 0.3519630       NA
#> 7 OMEGA        OM3 (TVKA)          ETA3  0.12241200 0.3498740       NA
#> 8 SIGMA        SIGMA(1,1)          EPS1  0.03753710 0.1937450       NA
#> 9 SIGMA        SIGMA(2,2)          EPS2  0.00527228 0.0726105       NA
#>       stderr        rse shrinkage fixed diagonal
#> 1 0.11148400   8.411221        NA FALSE       NA
#> 2 2.83899000   7.068758        NA FALSE       NA
#> 3 0.10974700   9.057125        NA FALSE       NA
#> 4 0.05035540  41.159536  13.14400 FALSE     TRUE
#> 5 0.03133500  42.035971        NA FALSE    FALSE
#> 6 0.03674650  29.663459   4.63131 FALSE     TRUE
#> 7 0.05627810  45.974333  24.33760 FALSE     TRUE
#> 8 0.00603493  16.077241  14.42190 FALSE     TRUE
#> 9 0.00921096 174.705441  14.42190 FALSE     TRUE
```

## parameter info can be retrieved with model

``` r
info <- get_model_parameter_info(mod)
info
```

<strong>Model Parameter Info</strong>

<strong>Theta Parameters</strong>

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

TVCL
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

L/hr
</td>

<td style="text-align:left;">

NA
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA2
</td>

<td style="text-align:left;">

TVV
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

L
</td>

<td style="text-align:left;">

NA
</td>

</tr>

<tr>

<td style="text-align:left;">

THETA3
</td>

<td style="text-align:left;">

TVKA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

1/hr
</td>

<td style="text-align:left;">

NA
</td>

</tr>

</tbody>

</table>

<strong>Omega Parameters</strong>

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

raw_name
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

OM1 (TVCL)
</td>

<td style="text-align:left;">

OM1
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

LogNormal
</td>

<td style="text-align:left;">

TVCL
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,1)
</td>

<td style="text-align:left;">

OM1,2 (TVCL, TVV)
</td>

<td style="text-align:left;">

OM1,2
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

LogNormal
</td>

<td style="text-align:left;">

TVCL, TVV
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,2)
</td>

<td style="text-align:left;">

OM2 (TVV)
</td>

<td style="text-align:left;">

OM2
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

LogNormal
</td>

<td style="text-align:left;">

TVV
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(3,3)
</td>

<td style="text-align:left;">

OM3 (TVKA)
</td>

<td style="text-align:left;">

OM3
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

LogNormal
</td>

<td style="text-align:left;">

TVKA
</td>

</tr>

</tbody>

</table>

<strong>Sigma Parameters</strong>

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

SIGMA(1,1)
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(2,2)
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

<td style="text-align:left;">

NA
</td>

</tr>

</tbody>

</table>

## Model information source is captured

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

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
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

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
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

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
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

raw_name
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

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,1)
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,2)
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(3,3)
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

models/onecmt/run003/run003.lst
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

SIGMA(1,1)
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

default
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

<td style="text-align:left;">

default
</td>

</tr>

</tbody>

</table>

# Copy model

``` r
copy_model(
  from = file.path("models", "onecmt", "run003.mod"),
  to = file.path("models", "onecmt", "run003b2.mod"), #copies run003 to run003b1 with jittered parameters
  description = "Updating run003 to 003b1 with jittered params",
  jitter = 0.1,
  overwrite = TRUE,
  seed = 804
)
#> NULL
```

## Copy model accepts hyperion model object

``` r
mod <- read_model(file.path("models", "onecmt", "run003.mod"))

mod |>
    copy_model(
        to = file.path("models", "onecmt", "run003b2.mod"),
        update = "all",
        description = "Updating run003 with mod object",
        overwrite = TRUE,
        seed = 804831
    )
#> NULL
```

# Managing metadata and lineage

## Set and read metadata

`set_metadata_file()` writes a JSON metadata sidecar next to a model.
The `description`, `tags`, `based_on`, and `copied_from` fields are
stored separately so model provenance can be tracked explicitly.

``` r
set_metadata_file(
  file.path("models", "onecmt", "run003.mod"),
  description = "Base one-compartment oral absorption model",
  tags = c("base", "key"),
  based_on = c("run002.mod")
)
#> NULL

read_model(file.path("models", "onecmt", "run003.mod")) |>
  get_model_metadata()
```

<strong>Model Metadata</strong>

<table>

<tbody>

<tr>

<td style="text-align:left;">

Description
</td>

<td style="text-align:left;">

Base one-compartment oral absorption model
</td>

</tr>

<tr>

<td style="text-align:left;">

Tags
</td>

<td style="text-align:left;">

base, key
</td>

</tr>

<tr>

<td style="text-align:left;">

Based On
</td>

<td style="text-align:left;">

models/onecmt/run002.mod
</td>

</tr>

</tbody>

</table>

## Populate metadata at copy time

`copy_model()` accepts `based_on` and `tags` so the new model’s metadata
is populated as part of the copy.

``` r
copy_model(
  from = file.path("models", "onecmt", "run003.mod"),
  to = file.path("models", "onecmt", "run003b2.mod"),
  description = "run003 with jittered params, exploring WT on V",
  based_on = c("run003.mod"),
  tags = c("exploratory", "wt-on-v"),
  jitter = 0.1,
  overwrite = TRUE,
  seed = 804
)
#> NULL
```

## Clear metadata fields

`clear_metadata_file()` selectively clears `based_on`, `copied_from`,
and/or `tags`. Fields not selected are preserved.

``` r
clear_metadata_file(
  file.path("models", "onecmt", "run003b2.mod"),
  tags = TRUE
)
#> NULL
```

## Lineage queries

`get_model_lineage()` returns the project lineage tree. With no
arguments it returns every model rooted at the directory containing
`pharos.toml`.

``` r
get_model_lineage()
```

<strong>Hyperion Model Tree</strong>

ℹ️ <strong>Models:</strong> 9

- <strong style="color:blue">models/onecmt/run001</strong>
  <span style="color:teal">base</span>
  <span style="color:gray">\|</span> <span style="color:gray">Base
  model</span>

- <strong style="color:blue">models/onecmt/run002</strong>
  <span style="color:gray">Adding COV step, unfixing eps(2)</span>

  - <span style="color:orange">models/onecmt/run003</span>
    <span style="color:teal">base, key</span>
    <span style="color:gray">\|</span> <span style="color:gray">Base
    one-compartment oral absorption model</span>
    - <span style="color:green">models/onecmt/run003b2</span>
      <span style="color:gray">run003 with jittered params, exploring WT
      on V</span>

- <strong style="color:blue">models/onecmt/run002a</strong>
  <span style="color:gray">Some description about what makes run002a
  diffe…</span>

- <strong style="color:blue">models/onecmt/run002b001</strong>
  <span style="color:teal">not run, 2cmt</span>
  <span style="color:gray">\|</span> <span style="color:gray">Jittering
  initial sigma estimates, using theta/…</span>

- <strong style="color:blue">models/onecmt/run003b1</strong>
  <span style="color:gray">Updating run003 to 003b1 with jittered
  params. …</span>

- <strong style="color:blue">models/onecmt/run004</strong>
  <span style="color:gray">Updating run001 to run004 with jittered
  params …</span>

- <strong style="color:blue">models/onecmt/run005</strong>
  <span style="color:gray">Updating run001 to run004 with jittered
  params …</span>

Pass a model to get its full lineage (ancestors and descendants):

``` r
get_model_lineage(file.path("models", "onecmt", "run003.mod"))
```

<strong>Hyperion Model Tree</strong>

ℹ️ <strong>Models:</strong> 3

- <strong style="color:blue">models/onecmt/run002</strong>
  <span style="color:gray">Adding COV step, unfixing eps(2)</span>
  - <span style="color:orange"><strong><u>models/onecmt/run003</u></strong></span>
    <span style="color:teal">base, key</span>
    <span style="color:gray">\|</span> <span style="color:gray">Base
    one-compartment oral absorption model</span>
    - <span style="color:green">models/onecmt/run003b2</span>
      <span style="color:gray">run003 with jittered params, exploring WT
      on V</span>

Use `from` and `to` to filter the tree downward, upward, or to the slice
between two models:

``` r
get_model_lineage(from = file.path("models", "onecmt", "run001.mod"))
```

<strong>Hyperion Model Tree</strong>

ℹ️ <strong>Models:</strong> 1

- <strong style="color:blue"><strong><u>models/onecmt/run001</u></strong></strong>
  <span style="color:teal">base</span>
  <span style="color:gray">\|</span> <span style="color:gray">Base
  model</span>

``` r

get_model_lineage(to = file.path("models", "onecmt", "run003b1.mod"))
```

<strong>Hyperion Model Tree</strong>

ℹ️ <strong>Models:</strong> 1

- <strong style="color:blue"><strong><u>models/onecmt/run003b1</u></strong></strong>
  <span style="color:gray">Updating run003 to 003b1 with jittered
  params. …</span>

``` r

get_model_lineage(
  from = file.path("models", "onecmt", "run001.mod"),
  to   = file.path("models", "onecmt", "run003b1.mod")
)
```

<strong>Hyperion Model Tree</strong>

⚠️ Empty tree - no models found
