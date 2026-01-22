---
title: "Parameter Tables"
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
library(gt)

test_data_dir <- system.file("extdata", package = "hyperion")
model_dir <- file.path(test_data_dir, "models", "onecmt")
model_run <- "run003"
```

``` r
spec <- TableSpec(
  display_transforms = list(omega = c("cv")),
  sections = section_rules(
    kind == "THETA" ~ "Structural model parameters",
    kind == "OMEGA" & diagonal ~ "Interindividual variance parameters",
    kind == "OMEGA" & !diagonal ~ "Interindividual covariance parameters",
    kind == "SIGMA" ~ "Residual error",
    TRUE ~ "Other"
  ),
  name_source = "display",
  title = paste(model_run, "Parameters")
)

info <- get_model_parameter_info(
  file.path(model_dir, model_run),
  system.file("lookup.toml", package = "hyperion")
)

info@sigma$`SIGMA(2,2)`@parameterization <- "AddErr"

mod_sum <- get_model_summary(file.path(model_dir, model_run))

get_parameters(file.path(model_dir, model_run)) |>
  apply_table_spec(spec, info) |>
  add_summary_info(mod_sum) |>
  make_parameter_table()
```

<div id="oxwxjnbaey" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#oxwxjnbaey table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#oxwxjnbaey thead, #oxwxjnbaey tbody, #oxwxjnbaey tfoot, #oxwxjnbaey tr, #oxwxjnbaey td, #oxwxjnbaey th {
  border-style: none;
}
&#10;#oxwxjnbaey p {
  margin: 0;
  padding: 0;
}
&#10;#oxwxjnbaey .gt_table {
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
&#10;#oxwxjnbaey .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#oxwxjnbaey .gt_title {
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
&#10;#oxwxjnbaey .gt_subtitle {
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
&#10;#oxwxjnbaey .gt_heading {
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
&#10;#oxwxjnbaey .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#oxwxjnbaey .gt_col_headings {
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
&#10;#oxwxjnbaey .gt_col_heading {
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
&#10;#oxwxjnbaey .gt_column_spanner_outer {
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
&#10;#oxwxjnbaey .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#oxwxjnbaey .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#oxwxjnbaey .gt_column_spanner {
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
&#10;#oxwxjnbaey .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#oxwxjnbaey .gt_group_heading {
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
&#10;#oxwxjnbaey .gt_empty_group_heading {
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
&#10;#oxwxjnbaey .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#oxwxjnbaey .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#oxwxjnbaey .gt_row {
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
&#10;#oxwxjnbaey .gt_stub {
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
&#10;#oxwxjnbaey .gt_stub_row_group {
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
&#10;#oxwxjnbaey .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#oxwxjnbaey .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#oxwxjnbaey .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#oxwxjnbaey .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#oxwxjnbaey .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#oxwxjnbaey .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#oxwxjnbaey .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#oxwxjnbaey .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#oxwxjnbaey .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#oxwxjnbaey .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#oxwxjnbaey .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#oxwxjnbaey .gt_footnotes {
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
&#10;#oxwxjnbaey .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#oxwxjnbaey .gt_sourcenotes {
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
&#10;#oxwxjnbaey .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#oxwxjnbaey .gt_left {
  text-align: left;
}
&#10;#oxwxjnbaey .gt_center {
  text-align: center;
}
&#10;#oxwxjnbaey .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#oxwxjnbaey .gt_font_normal {
  font-weight: normal;
}
&#10;#oxwxjnbaey .gt_font_bold {
  font-weight: bold;
}
&#10;#oxwxjnbaey .gt_font_italic {
  font-style: italic;
}
&#10;#oxwxjnbaey .gt_super {
  font-size: 65%;
}
&#10;#oxwxjnbaey .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#oxwxjnbaey .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#oxwxjnbaey .gt_indent_1 {
  text-indent: 5px;
}
&#10;#oxwxjnbaey .gt_indent_2 {
  text-indent: 10px;
}
&#10;#oxwxjnbaey .gt_indent_3 {
  text-indent: 15px;
}
&#10;#oxwxjnbaey .gt_indent_4 {
  text-indent: 20px;
}
&#10;#oxwxjnbaey .gt_indent_5 {
  text-indent: 25px;
}
&#10;#oxwxjnbaey .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#oxwxjnbaey div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="8" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">run003 Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="unit">Unit</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="variability"></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low">95% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse">RSE (%)</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="shrinkage">Shrinkage (%)</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>CL</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.33</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.11, 1.54]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">8.41</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>Vc</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">40.2</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[34.6, 45.7]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">7.07</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>KA</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>1/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.21</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[0.997, 1.43]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">9.06</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual variance parameters">Interindividual variance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0236, 0.221]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">41.2</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">13.1</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-Vc</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.124</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.3%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0519, 0.196]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">29.7</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">4.63</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-KA</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0121, 0.233]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">46.0</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">24.3</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual covariance parameters">Interindividual covariance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual covariance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL-Vc</span></td>
<td headers="Interindividual covariance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  estimate" class="gt_row gt_right">0.0745</td>
<td headers="Interindividual covariance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(Corr = 0.606)</span></td>
<td headers="Interindividual covariance parameters  ci_low" class="gt_row gt_right">[0.0131, 0.136]</td>
<td headers="Interindividual covariance parameters  rse" class="gt_row gt_right">42.0</td>
<td headers="Interindividual covariance parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual error">Residual error</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>PropErr</span></td>
<td headers="Residual error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual error  estimate" class="gt_row gt_right">0.0375</td>
<td headers="Residual error  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 19.4%)</span></td>
<td headers="Residual error  ci_low" class="gt_row gt_right">[0.0257, 0.0494]</td>
<td headers="Residual error  rse" class="gt_row gt_right">16.1</td>
<td headers="Residual error  shrinkage" class="gt_row gt_right">14.4</td></tr>
    <tr><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>AddErr</span></td>
<td headers="Residual error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual error  estimate" class="gt_row gt_right">0.00527</td>
<td headers="Residual error  variability" class="gt_row gt_left"><span class='gt_from_md'>(SD = 0.0726)</span></td>
<td headers="Residual error  ci_low" class="gt_row gt_right">[−0.0128, 0.0233]</td>
<td headers="Residual error  rse" class="gt_row gt_right">175</td>
<td headers="Residual error  shrinkage" class="gt_row gt_right">14.4</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> First Order Conditional Estimation with Interaction | Objective function value: -109.826 | Condition Number: 6.17</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>95% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.025</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.025} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.025</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>CV% for log-normal <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ω</mi></mrow><annotation encoding="application/x-tex">\Omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Ω</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\mathrm{Estimate}) - 1} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>CV% for proportional <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\mathrm{Estimate}} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathrm">Estimate</span></span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CI = confidence intervals; RSE = relative standard error; SE = standard error;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CV = coefficient of variation; SD = standard deviation; Corr = correlation</td>
    </tr>
  </tfoot>
</table>
</div>

# Changing display names with model info `@name_source`

``` r
spec@name_source <- "display"

info@sigma$`SIGMA(1,1)`@display <- "Proportional Error"
info@sigma$`SIGMA(2,2)`@display <- "Additive Error"

mod_sum <- get_model_summary(file.path(model_dir, model_run))

get_parameters(file.path(model_dir, model_run)) |>
  apply_table_spec(spec, info) |>
  add_summary_info(mod_sum) |>
  make_parameter_table()
```

<div id="zpdjzhnqvx" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#zpdjzhnqvx table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#zpdjzhnqvx thead, #zpdjzhnqvx tbody, #zpdjzhnqvx tfoot, #zpdjzhnqvx tr, #zpdjzhnqvx td, #zpdjzhnqvx th {
  border-style: none;
}
&#10;#zpdjzhnqvx p {
  margin: 0;
  padding: 0;
}
&#10;#zpdjzhnqvx .gt_table {
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
&#10;#zpdjzhnqvx .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#zpdjzhnqvx .gt_title {
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
&#10;#zpdjzhnqvx .gt_subtitle {
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
&#10;#zpdjzhnqvx .gt_heading {
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
&#10;#zpdjzhnqvx .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#zpdjzhnqvx .gt_col_headings {
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
&#10;#zpdjzhnqvx .gt_col_heading {
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
&#10;#zpdjzhnqvx .gt_column_spanner_outer {
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
&#10;#zpdjzhnqvx .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#zpdjzhnqvx .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#zpdjzhnqvx .gt_column_spanner {
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
&#10;#zpdjzhnqvx .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#zpdjzhnqvx .gt_group_heading {
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
&#10;#zpdjzhnqvx .gt_empty_group_heading {
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
&#10;#zpdjzhnqvx .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#zpdjzhnqvx .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#zpdjzhnqvx .gt_row {
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
&#10;#zpdjzhnqvx .gt_stub {
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
&#10;#zpdjzhnqvx .gt_stub_row_group {
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
&#10;#zpdjzhnqvx .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#zpdjzhnqvx .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#zpdjzhnqvx .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#zpdjzhnqvx .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#zpdjzhnqvx .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#zpdjzhnqvx .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#zpdjzhnqvx .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#zpdjzhnqvx .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#zpdjzhnqvx .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#zpdjzhnqvx .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#zpdjzhnqvx .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#zpdjzhnqvx .gt_footnotes {
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
&#10;#zpdjzhnqvx .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#zpdjzhnqvx .gt_sourcenotes {
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
&#10;#zpdjzhnqvx .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#zpdjzhnqvx .gt_left {
  text-align: left;
}
&#10;#zpdjzhnqvx .gt_center {
  text-align: center;
}
&#10;#zpdjzhnqvx .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#zpdjzhnqvx .gt_font_normal {
  font-weight: normal;
}
&#10;#zpdjzhnqvx .gt_font_bold {
  font-weight: bold;
}
&#10;#zpdjzhnqvx .gt_font_italic {
  font-style: italic;
}
&#10;#zpdjzhnqvx .gt_super {
  font-size: 65%;
}
&#10;#zpdjzhnqvx .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#zpdjzhnqvx .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#zpdjzhnqvx .gt_indent_1 {
  text-indent: 5px;
}
&#10;#zpdjzhnqvx .gt_indent_2 {
  text-indent: 10px;
}
&#10;#zpdjzhnqvx .gt_indent_3 {
  text-indent: 15px;
}
&#10;#zpdjzhnqvx .gt_indent_4 {
  text-indent: 20px;
}
&#10;#zpdjzhnqvx .gt_indent_5 {
  text-indent: 25px;
}
&#10;#zpdjzhnqvx .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#zpdjzhnqvx div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="8" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">run003 Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="unit">Unit</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="variability"></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low">95% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse">RSE (%)</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="shrinkage">Shrinkage (%)</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>CL</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.33</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.11, 1.54]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">8.41</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>Vc</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">40.2</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[34.6, 45.7]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">7.07</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>KA</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>1/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.21</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[0.997, 1.43]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">9.06</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual variance parameters">Interindividual variance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0236, 0.221]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">41.2</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">13.1</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-Vc</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.124</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.3%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0519, 0.196]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">29.7</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">4.63</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-KA</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0121, 0.233]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">46.0</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">24.3</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual covariance parameters">Interindividual covariance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual covariance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL-Vc</span></td>
<td headers="Interindividual covariance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  estimate" class="gt_row gt_right">0.0745</td>
<td headers="Interindividual covariance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(Corr = 0.606)</span></td>
<td headers="Interindividual covariance parameters  ci_low" class="gt_row gt_right">[0.0131, 0.136]</td>
<td headers="Interindividual covariance parameters  rse" class="gt_row gt_right">42.0</td>
<td headers="Interindividual covariance parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual error">Residual error</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>Proportional Error</span></td>
<td headers="Residual error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual error  estimate" class="gt_row gt_right">0.0375</td>
<td headers="Residual error  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 19.4%)</span></td>
<td headers="Residual error  ci_low" class="gt_row gt_right">[0.0257, 0.0494]</td>
<td headers="Residual error  rse" class="gt_row gt_right">16.1</td>
<td headers="Residual error  shrinkage" class="gt_row gt_right">14.4</td></tr>
    <tr><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>Additive Error</span></td>
<td headers="Residual error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual error  estimate" class="gt_row gt_right">0.00527</td>
<td headers="Residual error  variability" class="gt_row gt_left"><span class='gt_from_md'>(SD = 0.0726)</span></td>
<td headers="Residual error  ci_low" class="gt_row gt_right">[−0.0128, 0.0233]</td>
<td headers="Residual error  rse" class="gt_row gt_right">175</td>
<td headers="Residual error  shrinkage" class="gt_row gt_right">14.4</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> First Order Conditional Estimation with Interaction | Objective function value: -109.826 | Condition Number: 6.17</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>95% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.025</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.025} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.025</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>CV% for log-normal <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ω</mi></mrow><annotation encoding="application/x-tex">\Omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Ω</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\mathrm{Estimate}) - 1} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>CV% for proportional <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\mathrm{Estimate}} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathrm">Estimate</span></span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CI = confidence intervals; RSE = relative standard error; SE = standard error;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CV = coefficient of variation; SD = standard deviation; Corr = correlation</td>
    </tr>
  </tfoot>
</table>
</div>

``` r
spec@name_source <- "nonmem_name"

get_parameters(file.path(model_dir, model_run)) |>
  apply_table_spec(spec, info) |>
  add_summary_info(mod_sum) |>
  make_parameter_table()
```

<div id="oimwjjagkp" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#oimwjjagkp table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#oimwjjagkp thead, #oimwjjagkp tbody, #oimwjjagkp tfoot, #oimwjjagkp tr, #oimwjjagkp td, #oimwjjagkp th {
  border-style: none;
}
&#10;#oimwjjagkp p {
  margin: 0;
  padding: 0;
}
&#10;#oimwjjagkp .gt_table {
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
&#10;#oimwjjagkp .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#oimwjjagkp .gt_title {
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
&#10;#oimwjjagkp .gt_subtitle {
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
&#10;#oimwjjagkp .gt_heading {
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
&#10;#oimwjjagkp .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#oimwjjagkp .gt_col_headings {
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
&#10;#oimwjjagkp .gt_col_heading {
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
&#10;#oimwjjagkp .gt_column_spanner_outer {
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
&#10;#oimwjjagkp .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#oimwjjagkp .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#oimwjjagkp .gt_column_spanner {
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
&#10;#oimwjjagkp .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#oimwjjagkp .gt_group_heading {
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
&#10;#oimwjjagkp .gt_empty_group_heading {
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
&#10;#oimwjjagkp .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#oimwjjagkp .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#oimwjjagkp .gt_row {
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
&#10;#oimwjjagkp .gt_stub {
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
&#10;#oimwjjagkp .gt_stub_row_group {
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
&#10;#oimwjjagkp .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#oimwjjagkp .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#oimwjjagkp .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#oimwjjagkp .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#oimwjjagkp .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#oimwjjagkp .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#oimwjjagkp .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#oimwjjagkp .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#oimwjjagkp .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#oimwjjagkp .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#oimwjjagkp .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#oimwjjagkp .gt_footnotes {
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
&#10;#oimwjjagkp .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#oimwjjagkp .gt_sourcenotes {
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
&#10;#oimwjjagkp .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#oimwjjagkp .gt_left {
  text-align: left;
}
&#10;#oimwjjagkp .gt_center {
  text-align: center;
}
&#10;#oimwjjagkp .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#oimwjjagkp .gt_font_normal {
  font-weight: normal;
}
&#10;#oimwjjagkp .gt_font_bold {
  font-weight: bold;
}
&#10;#oimwjjagkp .gt_font_italic {
  font-style: italic;
}
&#10;#oimwjjagkp .gt_super {
  font-size: 65%;
}
&#10;#oimwjjagkp .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#oimwjjagkp .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#oimwjjagkp .gt_indent_1 {
  text-indent: 5px;
}
&#10;#oimwjjagkp .gt_indent_2 {
  text-indent: 10px;
}
&#10;#oimwjjagkp .gt_indent_3 {
  text-indent: 15px;
}
&#10;#oimwjjagkp .gt_indent_4 {
  text-indent: 20px;
}
&#10;#oimwjjagkp .gt_indent_5 {
  text-indent: 25px;
}
&#10;#oimwjjagkp .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#oimwjjagkp div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="8" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">run003 Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="unit">Unit</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="variability"></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low">95% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse">RSE (%)</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="shrinkage">Shrinkage (%)</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>THETA1</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.33</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.11, 1.54]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">8.41</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>THETA2</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">40.2</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[34.6, 45.7]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">7.07</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>THETA3</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>1/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.21</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[0.997, 1.43]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">9.06</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual variance parameters">Interindividual variance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OMEGA(1,1)-THETA1</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0236, 0.221]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">41.2</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">13.1</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OMEGA(2,2)-THETA2</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.124</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.3%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0519, 0.196]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">29.7</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">4.63</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OMEGA(3,3)-THETA3</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0121, 0.233]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">46.0</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">24.3</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual covariance parameters">Interindividual covariance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual covariance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OMEGA(2,1)-THETA1-THETA2</span></td>
<td headers="Interindividual covariance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  estimate" class="gt_row gt_right">0.0745</td>
<td headers="Interindividual covariance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(Corr = 0.606)</span></td>
<td headers="Interindividual covariance parameters  ci_low" class="gt_row gt_right">[0.0131, 0.136]</td>
<td headers="Interindividual covariance parameters  rse" class="gt_row gt_right">42.0</td>
<td headers="Interindividual covariance parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual error">Residual error</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>SIGMA(1,1)</span></td>
<td headers="Residual error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual error  estimate" class="gt_row gt_right">0.0375</td>
<td headers="Residual error  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 19.4%)</span></td>
<td headers="Residual error  ci_low" class="gt_row gt_right">[0.0257, 0.0494]</td>
<td headers="Residual error  rse" class="gt_row gt_right">16.1</td>
<td headers="Residual error  shrinkage" class="gt_row gt_right">14.4</td></tr>
    <tr><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>SIGMA(2,2)</span></td>
<td headers="Residual error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual error  estimate" class="gt_row gt_right">0.00527</td>
<td headers="Residual error  variability" class="gt_row gt_left"><span class='gt_from_md'>(SD = 0.0726)</span></td>
<td headers="Residual error  ci_low" class="gt_row gt_right">[−0.0128, 0.0233]</td>
<td headers="Residual error  rse" class="gt_row gt_right">175</td>
<td headers="Residual error  shrinkage" class="gt_row gt_right">14.4</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> First Order Conditional Estimation with Interaction | Objective function value: -109.826 | Condition Number: 6.17</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>95% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.025</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.025} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.025</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>CV% for log-normal <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ω</mi></mrow><annotation encoding="application/x-tex">\Omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Ω</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\mathrm{Estimate}) - 1} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>CV% for proportional <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\mathrm{Estimate}} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathrm">Estimate</span></span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CI = confidence intervals; RSE = relative standard error; SE = standard error;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CV = coefficient of variation; SD = standard deviation; Corr = correlation</td>
    </tr>
  </tfoot>
</table>
</div>

``` r

info
```

# Model Parameter Info

## Theta Parameters

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

CL
</td>

<td style="text-align:left;">

Clearance
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

Vc
</td>

<td style="text-align:left;">

Central Volume
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

KA
</td>

<td style="text-align:left;">

Absorption Rate Constant
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

## Omega Parameters

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

OM1
</td>

<td style="text-align:left;">

IIV-CL
</td>

<td style="text-align:left;">

Interindividual variability on CL
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

OM1,2
</td>

<td style="text-align:left;">

IIV-CL-Vc
</td>

<td style="text-align:left;">

Interindividual covariance for CL-Vc
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

OM2
</td>

<td style="text-align:left;">

IIV-Vc
</td>

<td style="text-align:left;">

Interindividual variability on Vc
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

OM3
</td>

<td style="text-align:left;">

IIV-KA
</td>

<td style="text-align:left;">

Interindividual variability on KA
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

## Sigma Parameters

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

SIG1
</td>

<td style="text-align:left;">

Proportional Error
</td>

<td style="text-align:left;">

Proportional Error
</td>

<td style="text-align:left;">

Proportional
</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(2,2)
</td>

<td style="text-align:left;">

SIG2
</td>

<td style="text-align:left;">

Additive Error
</td>

<td style="text-align:left;">

Additive Error
</td>

<td style="text-align:left;">

AddErr
</td>

</tr>

</tbody>

</table>

## Adding descriptions with `@add_columns`

``` r
spec@name_source <- "display"
spec@add_columns <- "description"

get_parameters(file.path(model_dir, model_run)) |>
  apply_table_spec(spec, info) |>
  add_summary_info(mod_sum) |>
  make_parameter_table()
```

<div id="iaotfiysfc" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#iaotfiysfc table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#iaotfiysfc thead, #iaotfiysfc tbody, #iaotfiysfc tfoot, #iaotfiysfc tr, #iaotfiysfc td, #iaotfiysfc th {
  border-style: none;
}
&#10;#iaotfiysfc p {
  margin: 0;
  padding: 0;
}
&#10;#iaotfiysfc .gt_table {
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
&#10;#iaotfiysfc .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#iaotfiysfc .gt_title {
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
&#10;#iaotfiysfc .gt_subtitle {
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
&#10;#iaotfiysfc .gt_heading {
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
&#10;#iaotfiysfc .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#iaotfiysfc .gt_col_headings {
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
&#10;#iaotfiysfc .gt_col_heading {
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
&#10;#iaotfiysfc .gt_column_spanner_outer {
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
&#10;#iaotfiysfc .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#iaotfiysfc .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#iaotfiysfc .gt_column_spanner {
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
&#10;#iaotfiysfc .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#iaotfiysfc .gt_group_heading {
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
&#10;#iaotfiysfc .gt_empty_group_heading {
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
&#10;#iaotfiysfc .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#iaotfiysfc .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#iaotfiysfc .gt_row {
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
&#10;#iaotfiysfc .gt_stub {
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
&#10;#iaotfiysfc .gt_stub_row_group {
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
&#10;#iaotfiysfc .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#iaotfiysfc .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#iaotfiysfc .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#iaotfiysfc .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#iaotfiysfc .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#iaotfiysfc .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#iaotfiysfc .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#iaotfiysfc .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#iaotfiysfc .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#iaotfiysfc .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#iaotfiysfc .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#iaotfiysfc .gt_footnotes {
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
&#10;#iaotfiysfc .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#iaotfiysfc .gt_sourcenotes {
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
&#10;#iaotfiysfc .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#iaotfiysfc .gt_left {
  text-align: left;
}
&#10;#iaotfiysfc .gt_center {
  text-align: center;
}
&#10;#iaotfiysfc .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#iaotfiysfc .gt_font_normal {
  font-weight: normal;
}
&#10;#iaotfiysfc .gt_font_bold {
  font-weight: bold;
}
&#10;#iaotfiysfc .gt_font_italic {
  font-style: italic;
}
&#10;#iaotfiysfc .gt_super {
  font-size: 65%;
}
&#10;#iaotfiysfc .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#iaotfiysfc .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#iaotfiysfc .gt_indent_1 {
  text-indent: 5px;
}
&#10;#iaotfiysfc .gt_indent_2 {
  text-indent: 10px;
}
&#10;#iaotfiysfc .gt_indent_3 {
  text-indent: 15px;
}
&#10;#iaotfiysfc .gt_indent_4 {
  text-indent: 20px;
}
&#10;#iaotfiysfc .gt_indent_5 {
  text-indent: 25px;
}
&#10;#iaotfiysfc .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#iaotfiysfc div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="9" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">run003 Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="description"></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="unit">Unit</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="variability"></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low">95% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse">RSE (%)</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="shrinkage">Shrinkage (%)</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="9" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>CL</span></td>
<td headers="Structural model parameters  description" class="gt_row gt_left"><span class='gt_from_md'>Clearance</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.33</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.11, 1.54]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">8.41</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>Vc</span></td>
<td headers="Structural model parameters  description" class="gt_row gt_left"><span class='gt_from_md'>Central Volume</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">40.2</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[34.6, 45.7]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">7.07</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>KA</span></td>
<td headers="Structural model parameters  description" class="gt_row gt_left"><span class='gt_from_md'>Absorption Rate Constant</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>1/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.21</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[0.997, 1.43]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">9.06</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="9" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual variance parameters">Interindividual variance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL</span></td>
<td headers="Interindividual variance parameters  description" class="gt_row gt_left"><span class='gt_from_md'>Interindividual variability on CL</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0236, 0.221]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">41.2</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">13.1</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-Vc</span></td>
<td headers="Interindividual variance parameters  description" class="gt_row gt_left"><span class='gt_from_md'>Interindividual variability on Vc</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.124</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.3%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0519, 0.196]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">29.7</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">4.63</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-KA</span></td>
<td headers="Interindividual variance parameters  description" class="gt_row gt_left"><span class='gt_from_md'>Interindividual variability on KA</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0121, 0.233]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">46.0</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">24.3</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="9" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual covariance parameters">Interindividual covariance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual covariance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL-Vc</span></td>
<td headers="Interindividual covariance parameters  description" class="gt_row gt_left"><span class='gt_from_md'>Interindividual covariance for CL-Vc</span></td>
<td headers="Interindividual covariance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  estimate" class="gt_row gt_right">0.0745</td>
<td headers="Interindividual covariance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(Corr = 0.606)</span></td>
<td headers="Interindividual covariance parameters  ci_low" class="gt_row gt_right">[0.0131, 0.136]</td>
<td headers="Interindividual covariance parameters  rse" class="gt_row gt_right">42.0</td>
<td headers="Interindividual covariance parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="9" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual error">Residual error</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>Proportional Error</span></td>
<td headers="Residual error  description" class="gt_row gt_left"><span class='gt_from_md'>Proportional Error</span></td>
<td headers="Residual error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual error  estimate" class="gt_row gt_right">0.0375</td>
<td headers="Residual error  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 19.4%)</span></td>
<td headers="Residual error  ci_low" class="gt_row gt_right">[0.0257, 0.0494]</td>
<td headers="Residual error  rse" class="gt_row gt_right">16.1</td>
<td headers="Residual error  shrinkage" class="gt_row gt_right">14.4</td></tr>
    <tr><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>Additive Error</span></td>
<td headers="Residual error  description" class="gt_row gt_left"><span class='gt_from_md'>Additive Error</span></td>
<td headers="Residual error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual error  estimate" class="gt_row gt_right">0.00527</td>
<td headers="Residual error  variability" class="gt_row gt_left"><span class='gt_from_md'>(SD = 0.0726)</span></td>
<td headers="Residual error  ci_low" class="gt_row gt_right">[−0.0128, 0.0233]</td>
<td headers="Residual error  rse" class="gt_row gt_right">175</td>
<td headers="Residual error  shrinkage" class="gt_row gt_right">14.4</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="9"> First Order Conditional Estimation with Interaction | Objective function value: -109.826 | Condition Number: 6.17</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="9"> <span class='gt_from_md'>95% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.025</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.025} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.025</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="9"> <span class='gt_from_md'>CV% for log-normal <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ω</mi></mrow><annotation encoding="application/x-tex">\Omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Ω</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\mathrm{Estimate}) - 1} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="9"> <span class='gt_from_md'>CV% for proportional <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\mathrm{Estimate}} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathrm">Estimate</span></span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="9"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="9"> CI = confidence intervals; RSE = relative standard error; SE = standard error;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="9"> CV = coefficient of variation; SD = standard deviation; Corr = correlation</td>
    </tr>
  </tfoot>
</table>
</div>

## Removing columns with `@drop_columns` property

``` r
spec@add_columns <- NULL
spec@name_source <- "display"
spec@drop_columns <- "unit"

get_parameters(file.path(model_dir, model_run)) |>
  apply_table_spec(spec, info) |>
  add_summary_info(mod_sum) |>
  make_parameter_table()
```

<div id="gfvlsncakm" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#gfvlsncakm table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#gfvlsncakm thead, #gfvlsncakm tbody, #gfvlsncakm tfoot, #gfvlsncakm tr, #gfvlsncakm td, #gfvlsncakm th {
  border-style: none;
}
&#10;#gfvlsncakm p {
  margin: 0;
  padding: 0;
}
&#10;#gfvlsncakm .gt_table {
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
&#10;#gfvlsncakm .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#gfvlsncakm .gt_title {
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
&#10;#gfvlsncakm .gt_subtitle {
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
&#10;#gfvlsncakm .gt_heading {
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
&#10;#gfvlsncakm .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#gfvlsncakm .gt_col_headings {
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
&#10;#gfvlsncakm .gt_col_heading {
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
&#10;#gfvlsncakm .gt_column_spanner_outer {
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
&#10;#gfvlsncakm .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#gfvlsncakm .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#gfvlsncakm .gt_column_spanner {
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
&#10;#gfvlsncakm .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#gfvlsncakm .gt_group_heading {
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
&#10;#gfvlsncakm .gt_empty_group_heading {
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
&#10;#gfvlsncakm .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#gfvlsncakm .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#gfvlsncakm .gt_row {
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
&#10;#gfvlsncakm .gt_stub {
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
&#10;#gfvlsncakm .gt_stub_row_group {
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
&#10;#gfvlsncakm .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#gfvlsncakm .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#gfvlsncakm .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#gfvlsncakm .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#gfvlsncakm .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#gfvlsncakm .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#gfvlsncakm .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#gfvlsncakm .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#gfvlsncakm .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#gfvlsncakm .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#gfvlsncakm .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#gfvlsncakm .gt_footnotes {
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
&#10;#gfvlsncakm .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#gfvlsncakm .gt_sourcenotes {
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
&#10;#gfvlsncakm .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#gfvlsncakm .gt_left {
  text-align: left;
}
&#10;#gfvlsncakm .gt_center {
  text-align: center;
}
&#10;#gfvlsncakm .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#gfvlsncakm .gt_font_normal {
  font-weight: normal;
}
&#10;#gfvlsncakm .gt_font_bold {
  font-weight: bold;
}
&#10;#gfvlsncakm .gt_font_italic {
  font-style: italic;
}
&#10;#gfvlsncakm .gt_super {
  font-size: 65%;
}
&#10;#gfvlsncakm .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#gfvlsncakm .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#gfvlsncakm .gt_indent_1 {
  text-indent: 5px;
}
&#10;#gfvlsncakm .gt_indent_2 {
  text-indent: 10px;
}
&#10;#gfvlsncakm .gt_indent_3 {
  text-indent: 15px;
}
&#10;#gfvlsncakm .gt_indent_4 {
  text-indent: 20px;
}
&#10;#gfvlsncakm .gt_indent_5 {
  text-indent: 25px;
}
&#10;#gfvlsncakm .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#gfvlsncakm div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="7" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">run003 Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="variability"></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low">95% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse">RSE (%)</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="shrinkage">Shrinkage (%)</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="7" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>CL</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.33</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.11, 1.54]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">8.41</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>Vc</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">40.2</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[34.6, 45.7]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">7.07</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>KA</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.21</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[0.997, 1.43]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">9.06</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="7" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual variance parameters">Interindividual variance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0236, 0.221]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">41.2</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">13.1</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-Vc</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.124</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.3%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0519, 0.196]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">29.7</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">4.63</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-KA</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0121, 0.233]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">46.0</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">24.3</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="7" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual covariance parameters">Interindividual covariance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual covariance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL-Vc</span></td>
<td headers="Interindividual covariance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  estimate" class="gt_row gt_right">0.0745</td>
<td headers="Interindividual covariance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(Corr = 0.606)</span></td>
<td headers="Interindividual covariance parameters  ci_low" class="gt_row gt_right">[0.0131, 0.136]</td>
<td headers="Interindividual covariance parameters  rse" class="gt_row gt_right">42.0</td>
<td headers="Interindividual covariance parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="7" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual error">Residual error</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>Proportional Error</span></td>
<td headers="Residual error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  estimate" class="gt_row gt_right">0.0375</td>
<td headers="Residual error  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 19.4%)</span></td>
<td headers="Residual error  ci_low" class="gt_row gt_right">[0.0257, 0.0494]</td>
<td headers="Residual error  rse" class="gt_row gt_right">16.1</td>
<td headers="Residual error  shrinkage" class="gt_row gt_right">14.4</td></tr>
    <tr><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>Additive Error</span></td>
<td headers="Residual error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  estimate" class="gt_row gt_right">0.00527</td>
<td headers="Residual error  variability" class="gt_row gt_left"><span class='gt_from_md'>(SD = 0.0726)</span></td>
<td headers="Residual error  ci_low" class="gt_row gt_right">[−0.0128, 0.0233]</td>
<td headers="Residual error  rse" class="gt_row gt_right">175</td>
<td headers="Residual error  shrinkage" class="gt_row gt_right">14.4</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="7"> First Order Conditional Estimation with Interaction | Objective function value: -109.826 | Condition Number: 6.17</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="7"> <span class='gt_from_md'>95% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.025</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.025} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.025</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="7"> <span class='gt_from_md'>CV% for log-normal <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ω</mi></mrow><annotation encoding="application/x-tex">\Omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Ω</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\mathrm{Estimate}) - 1} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="7"> <span class='gt_from_md'>CV% for proportional <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\mathrm{Estimate}} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathrm">Estimate</span></span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="7"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="7"> CI = confidence intervals; RSE = relative standard error; SE = standard error;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="7"> CV = coefficient of variation; SD = standard deviation; Corr = correlation</td>
    </tr>
  </tfoot>
</table>
</div>

``` r
spec@drop_columns <- c("unit", "shrinkage")

get_parameters(file.path(model_dir, model_run)) |>
  apply_table_spec(spec, info) |>
  add_summary_info(mod_sum) |>
  make_parameter_table()
```

<div id="qgpsodwwpw" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#qgpsodwwpw table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#qgpsodwwpw thead, #qgpsodwwpw tbody, #qgpsodwwpw tfoot, #qgpsodwwpw tr, #qgpsodwwpw td, #qgpsodwwpw th {
  border-style: none;
}
&#10;#qgpsodwwpw p {
  margin: 0;
  padding: 0;
}
&#10;#qgpsodwwpw .gt_table {
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
&#10;#qgpsodwwpw .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#qgpsodwwpw .gt_title {
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
&#10;#qgpsodwwpw .gt_subtitle {
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
&#10;#qgpsodwwpw .gt_heading {
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
&#10;#qgpsodwwpw .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#qgpsodwwpw .gt_col_headings {
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
&#10;#qgpsodwwpw .gt_col_heading {
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
&#10;#qgpsodwwpw .gt_column_spanner_outer {
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
&#10;#qgpsodwwpw .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#qgpsodwwpw .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#qgpsodwwpw .gt_column_spanner {
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
&#10;#qgpsodwwpw .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#qgpsodwwpw .gt_group_heading {
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
&#10;#qgpsodwwpw .gt_empty_group_heading {
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
&#10;#qgpsodwwpw .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#qgpsodwwpw .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#qgpsodwwpw .gt_row {
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
&#10;#qgpsodwwpw .gt_stub {
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
&#10;#qgpsodwwpw .gt_stub_row_group {
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
&#10;#qgpsodwwpw .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#qgpsodwwpw .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#qgpsodwwpw .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#qgpsodwwpw .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#qgpsodwwpw .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#qgpsodwwpw .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#qgpsodwwpw .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#qgpsodwwpw .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#qgpsodwwpw .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#qgpsodwwpw .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#qgpsodwwpw .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#qgpsodwwpw .gt_footnotes {
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
&#10;#qgpsodwwpw .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#qgpsodwwpw .gt_sourcenotes {
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
&#10;#qgpsodwwpw .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#qgpsodwwpw .gt_left {
  text-align: left;
}
&#10;#qgpsodwwpw .gt_center {
  text-align: center;
}
&#10;#qgpsodwwpw .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#qgpsodwwpw .gt_font_normal {
  font-weight: normal;
}
&#10;#qgpsodwwpw .gt_font_bold {
  font-weight: bold;
}
&#10;#qgpsodwwpw .gt_font_italic {
  font-style: italic;
}
&#10;#qgpsodwwpw .gt_super {
  font-size: 65%;
}
&#10;#qgpsodwwpw .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#qgpsodwwpw .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#qgpsodwwpw .gt_indent_1 {
  text-indent: 5px;
}
&#10;#qgpsodwwpw .gt_indent_2 {
  text-indent: 10px;
}
&#10;#qgpsodwwpw .gt_indent_3 {
  text-indent: 15px;
}
&#10;#qgpsodwwpw .gt_indent_4 {
  text-indent: 20px;
}
&#10;#qgpsodwwpw .gt_indent_5 {
  text-indent: 25px;
}
&#10;#qgpsodwwpw .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#qgpsodwwpw div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="6" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">run003 Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="variability"></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low">95% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse">RSE (%)</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="6" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>CL</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.33</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.11, 1.54]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">8.41</td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>Vc</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">40.2</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[34.6, 45.7]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">7.07</td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>KA</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.21</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[0.997, 1.43]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">9.06</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="6" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual variance parameters">Interindividual variance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0236, 0.221]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">41.2</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-Vc</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.124</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.3%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0519, 0.196]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">29.7</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-KA</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0121, 0.233]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">46.0</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="6" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual covariance parameters">Interindividual covariance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual covariance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL-Vc</span></td>
<td headers="Interindividual covariance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  estimate" class="gt_row gt_right">0.0745</td>
<td headers="Interindividual covariance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(Corr = 0.606)</span></td>
<td headers="Interindividual covariance parameters  ci_low" class="gt_row gt_right">[0.0131, 0.136]</td>
<td headers="Interindividual covariance parameters  rse" class="gt_row gt_right">42.0</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="6" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual error">Residual error</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>Proportional Error</span></td>
<td headers="Residual error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  estimate" class="gt_row gt_right">0.0375</td>
<td headers="Residual error  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 19.4%)</span></td>
<td headers="Residual error  ci_low" class="gt_row gt_right">[0.0257, 0.0494]</td>
<td headers="Residual error  rse" class="gt_row gt_right">16.1</td></tr>
    <tr><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>Additive Error</span></td>
<td headers="Residual error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  estimate" class="gt_row gt_right">0.00527</td>
<td headers="Residual error  variability" class="gt_row gt_left"><span class='gt_from_md'>(SD = 0.0726)</span></td>
<td headers="Residual error  ci_low" class="gt_row gt_right">[−0.0128, 0.0233]</td>
<td headers="Residual error  rse" class="gt_row gt_right">175</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="6"> First Order Conditional Estimation with Interaction | Objective function value: -109.826 | Condition Number: 6.17</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="6"> <span class='gt_from_md'>95% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.025</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.025} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.025</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="6"> <span class='gt_from_md'>CV% for log-normal <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ω</mi></mrow><annotation encoding="application/x-tex">\Omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Ω</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\mathrm{Estimate}) - 1} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="6"> <span class='gt_from_md'>CV% for proportional <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\mathrm{Estimate}} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathrm">Estimate</span></span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="6"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="6"> CI = confidence intervals; RSE = relative standard error; SE = standard error;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="6"> CV = coefficient of variation; SD = standard deviation; Corr = correlation</td>
    </tr>
  </tfoot>
</table>
</div>

# Structural parameters only

``` r
sp_spec <- TableSpec(
  sections = section_rules(
    kind == "THETA" ~ "Structural model parameters",
    TRUE ~ "Other"
  ),
  row_filter = filter_rules(
    kind == "THETA"
  ),
  drop_columns = "shrinkage"
)

get_parameters(file.path(model_dir, model_run)) |>
  apply_table_spec(sp_spec, info) |>
  make_parameter_table()
```

<div id="zuvlqbojrq" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#zuvlqbojrq table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#zuvlqbojrq thead, #zuvlqbojrq tbody, #zuvlqbojrq tfoot, #zuvlqbojrq tr, #zuvlqbojrq td, #zuvlqbojrq th {
  border-style: none;
}
&#10;#zuvlqbojrq p {
  margin: 0;
  padding: 0;
}
&#10;#zuvlqbojrq .gt_table {
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
&#10;#zuvlqbojrq .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#zuvlqbojrq .gt_title {
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
&#10;#zuvlqbojrq .gt_subtitle {
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
&#10;#zuvlqbojrq .gt_heading {
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
&#10;#zuvlqbojrq .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#zuvlqbojrq .gt_col_headings {
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
&#10;#zuvlqbojrq .gt_col_heading {
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
&#10;#zuvlqbojrq .gt_column_spanner_outer {
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
&#10;#zuvlqbojrq .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#zuvlqbojrq .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#zuvlqbojrq .gt_column_spanner {
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
&#10;#zuvlqbojrq .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#zuvlqbojrq .gt_group_heading {
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
&#10;#zuvlqbojrq .gt_empty_group_heading {
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
&#10;#zuvlqbojrq .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#zuvlqbojrq .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#zuvlqbojrq .gt_row {
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
&#10;#zuvlqbojrq .gt_stub {
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
&#10;#zuvlqbojrq .gt_stub_row_group {
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
&#10;#zuvlqbojrq .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#zuvlqbojrq .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#zuvlqbojrq .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#zuvlqbojrq .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#zuvlqbojrq .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#zuvlqbojrq .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#zuvlqbojrq .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#zuvlqbojrq .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#zuvlqbojrq .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#zuvlqbojrq .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#zuvlqbojrq .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#zuvlqbojrq .gt_footnotes {
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
&#10;#zuvlqbojrq .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#zuvlqbojrq .gt_sourcenotes {
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
&#10;#zuvlqbojrq .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#zuvlqbojrq .gt_left {
  text-align: left;
}
&#10;#zuvlqbojrq .gt_center {
  text-align: center;
}
&#10;#zuvlqbojrq .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#zuvlqbojrq .gt_font_normal {
  font-weight: normal;
}
&#10;#zuvlqbojrq .gt_font_bold {
  font-weight: bold;
}
&#10;#zuvlqbojrq .gt_font_italic {
  font-style: italic;
}
&#10;#zuvlqbojrq .gt_super {
  font-size: 65%;
}
&#10;#zuvlqbojrq .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#zuvlqbojrq .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#zuvlqbojrq .gt_indent_1 {
  text-indent: 5px;
}
&#10;#zuvlqbojrq .gt_indent_2 {
  text-indent: 10px;
}
&#10;#zuvlqbojrq .gt_indent_3 {
  text-indent: 15px;
}
&#10;#zuvlqbojrq .gt_indent_4 {
  text-indent: 20px;
}
&#10;#zuvlqbojrq .gt_indent_5 {
  text-indent: 25px;
}
&#10;#zuvlqbojrq .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#zuvlqbojrq div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="6" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">Model Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="unit">Unit</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low">95% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse">RSE (%)</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="6" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVCL</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.33</td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.11, 1.54]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">8.41</td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVV</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">40.2</td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[34.6, 45.7]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">7.07</td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVKA</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>1/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.21</td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[0.997, 1.43]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">9.06</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="6"> <span class='gt_from_md'>95% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.025</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.025} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.025</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="6"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="6"> CI = confidence intervals; RSE = relative standard error; SE = standard error</td>
    </tr>
  </tfoot>
</table>
</div>

# Random Effect Parameters only

``` r
re_spec <- TableSpec(
  sections = section_rules(
    kind == "OMEGA" ~ "Random Effect Parameters",
    kind == "SIGMA" ~ "Residual Error",
    TRUE ~ "Other"
  ),
  row_filter = filter_rules(
    kind != "THETA"
  ),
  drop_columns = "unit",
)

get_parameters(file.path(model_dir, model_run)) |>
  apply_table_spec(re_spec, info) |>
  make_parameter_table()
```

<div id="jkklytfihm" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#jkklytfihm table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#jkklytfihm thead, #jkklytfihm tbody, #jkklytfihm tfoot, #jkklytfihm tr, #jkklytfihm td, #jkklytfihm th {
  border-style: none;
}
&#10;#jkklytfihm p {
  margin: 0;
  padding: 0;
}
&#10;#jkklytfihm .gt_table {
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
&#10;#jkklytfihm .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#jkklytfihm .gt_title {
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
&#10;#jkklytfihm .gt_subtitle {
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
&#10;#jkklytfihm .gt_heading {
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
&#10;#jkklytfihm .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#jkklytfihm .gt_col_headings {
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
&#10;#jkklytfihm .gt_col_heading {
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
&#10;#jkklytfihm .gt_column_spanner_outer {
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
&#10;#jkklytfihm .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#jkklytfihm .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#jkklytfihm .gt_column_spanner {
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
&#10;#jkklytfihm .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#jkklytfihm .gt_group_heading {
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
&#10;#jkklytfihm .gt_empty_group_heading {
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
&#10;#jkklytfihm .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#jkklytfihm .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#jkklytfihm .gt_row {
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
&#10;#jkklytfihm .gt_stub {
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
&#10;#jkklytfihm .gt_stub_row_group {
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
&#10;#jkklytfihm .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#jkklytfihm .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#jkklytfihm .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#jkklytfihm .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#jkklytfihm .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#jkklytfihm .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#jkklytfihm .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#jkklytfihm .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#jkklytfihm .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#jkklytfihm .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#jkklytfihm .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#jkklytfihm .gt_footnotes {
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
&#10;#jkklytfihm .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#jkklytfihm .gt_sourcenotes {
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
&#10;#jkklytfihm .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#jkklytfihm .gt_left {
  text-align: left;
}
&#10;#jkklytfihm .gt_center {
  text-align: center;
}
&#10;#jkklytfihm .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#jkklytfihm .gt_font_normal {
  font-weight: normal;
}
&#10;#jkklytfihm .gt_font_bold {
  font-weight: bold;
}
&#10;#jkklytfihm .gt_font_italic {
  font-style: italic;
}
&#10;#jkklytfihm .gt_super {
  font-size: 65%;
}
&#10;#jkklytfihm .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#jkklytfihm .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#jkklytfihm .gt_indent_1 {
  text-indent: 5px;
}
&#10;#jkklytfihm .gt_indent_2 {
  text-indent: 10px;
}
&#10;#jkklytfihm .gt_indent_3 {
  text-indent: 15px;
}
&#10;#jkklytfihm .gt_indent_4 {
  text-indent: 20px;
}
&#10;#jkklytfihm .gt_indent_5 {
  text-indent: 25px;
}
&#10;#jkklytfihm .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#jkklytfihm div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="7" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">Model Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="variability"></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low">95% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse">RSE (%)</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="shrinkage">Shrinkage (%)</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="7" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Random Effect Parameters">Random Effect Parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Random Effect Parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM1-TVCL</span></td>
<td headers="Random Effect Parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\exp(\Omega_{(1,1)})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1052em;vertical-align:-0.3552em;"></span><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></span></td>
<td headers="Random Effect Parameters  estimate" class="gt_row gt_right">1.13</td>
<td headers="Random Effect Parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Random Effect Parameters  ci_low" class="gt_row gt_right">[1.02, 1.25]</td>
<td headers="Random Effect Parameters  rse" class="gt_row gt_right">41.2</td>
<td headers="Random Effect Parameters  shrinkage" class="gt_row gt_right">13.1</td></tr>
    <tr><td headers="Random Effect Parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM1,2-TVCL-TVV</span></td>
<td headers="Random Effect Parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\exp(\Omega_{(2,1)})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1052em;vertical-align:-0.3552em;"></span><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></span></td>
<td headers="Random Effect Parameters  estimate" class="gt_row gt_right">1.08</td>
<td headers="Random Effect Parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(Corr = 0.606)</span></td>
<td headers="Random Effect Parameters  ci_low" class="gt_row gt_right">[1.01, 1.15]</td>
<td headers="Random Effect Parameters  rse" class="gt_row gt_right">42.0</td>
<td headers="Random Effect Parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Random Effect Parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM2-TVV</span></td>
<td headers="Random Effect Parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\exp(\Omega_{(2,2)})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1052em;vertical-align:-0.3552em;"></span><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></span></td>
<td headers="Random Effect Parameters  estimate" class="gt_row gt_right">1.13</td>
<td headers="Random Effect Parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.3%)</span></td>
<td headers="Random Effect Parameters  ci_low" class="gt_row gt_right">[1.05, 1.22]</td>
<td headers="Random Effect Parameters  rse" class="gt_row gt_right">29.7</td>
<td headers="Random Effect Parameters  shrinkage" class="gt_row gt_right">4.63</td></tr>
    <tr><td headers="Random Effect Parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM3-TVKA</span></td>
<td headers="Random Effect Parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\exp(\Omega_{(3,3)})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1052em;vertical-align:-0.3552em;"></span><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></span></td>
<td headers="Random Effect Parameters  estimate" class="gt_row gt_right">1.13</td>
<td headers="Random Effect Parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Random Effect Parameters  ci_low" class="gt_row gt_right">[1.01, 1.26]</td>
<td headers="Random Effect Parameters  rse" class="gt_row gt_right">46.0</td>
<td headers="Random Effect Parameters  shrinkage" class="gt_row gt_right">24.3</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="7" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual Error">Residual Error</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual Error  name" class="gt_row gt_left"><span class='gt_from_md'>SIG1</span></td>
<td headers="Residual Error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual Error  estimate" class="gt_row gt_right">0.0375</td>
<td headers="Residual Error  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 19.4%)</span></td>
<td headers="Residual Error  ci_low" class="gt_row gt_right">[0.0257, 0.0494]</td>
<td headers="Residual Error  rse" class="gt_row gt_right">16.1</td>
<td headers="Residual Error  shrinkage" class="gt_row gt_right">14.4</td></tr>
    <tr><td headers="Residual Error  name" class="gt_row gt_left"><span class='gt_from_md'>SIG2</span></td>
<td headers="Residual Error  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual Error  estimate" class="gt_row gt_right">0.00527</td>
<td headers="Residual Error  variability" class="gt_row gt_left"><span class='gt_from_md'>(SD = 0.0726)</span></td>
<td headers="Residual Error  ci_low" class="gt_row gt_right">[−0.0128, 0.0233]</td>
<td headers="Residual Error  rse" class="gt_row gt_right">175</td>
<td headers="Residual Error  shrinkage" class="gt_row gt_right">14.4</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="7"> <span class='gt_from_md'>95% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.025</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.025} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.025</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="7"> <span class='gt_from_md'>CV% for log-normal <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ω</mi></mrow><annotation encoding="application/x-tex">\Omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Ω</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\mathrm{Estimate}) - 1} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="7"> <span class='gt_from_md'>CV% for proportional <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\mathrm{Estimate}} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathrm">Estimate</span></span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="7"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="7"> CI = confidence intervals; RSE = relative standard error; SE = standard error;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="7"> CV = coefficient of variation; SD = standard deviation; Corr = correlation</td>
    </tr>
  </tfoot>
</table>
</div>

# Confidence Interval level

``` r
spec <- TableSpec(
  display_transforms = list(omega = c("cv")),
  sections = section_rules(
    kind == "THETA" ~ "Structural model parameters",
    kind == "OMEGA" & diagonal ~ "Interindividual variance parameters",
    kind == "OMEGA" & !diagonal ~ "Interindividual covariance parameters",
    kind == "SIGMA" ~ "Residual variance",
    TRUE ~ "Other"
  ),
  ci_level = 0.7,
  n_sigfig = 3
)

mod_sum <- get_model_summary(file.path(model_dir, model_run))
info <- get_model_parameter_info(file.path(model_dir, model_run))

get_parameters(file.path(model_dir, model_run)) |>
  apply_table_spec(spec, info) |>
  add_summary_info(mod_sum) |>
  make_parameter_table()
```

<div id="bcglogiysk" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#bcglogiysk table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#bcglogiysk thead, #bcglogiysk tbody, #bcglogiysk tfoot, #bcglogiysk tr, #bcglogiysk td, #bcglogiysk th {
  border-style: none;
}
&#10;#bcglogiysk p {
  margin: 0;
  padding: 0;
}
&#10;#bcglogiysk .gt_table {
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
&#10;#bcglogiysk .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#bcglogiysk .gt_title {
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
&#10;#bcglogiysk .gt_subtitle {
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
&#10;#bcglogiysk .gt_heading {
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
&#10;#bcglogiysk .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#bcglogiysk .gt_col_headings {
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
&#10;#bcglogiysk .gt_col_heading {
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
&#10;#bcglogiysk .gt_column_spanner_outer {
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
&#10;#bcglogiysk .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#bcglogiysk .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#bcglogiysk .gt_column_spanner {
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
&#10;#bcglogiysk .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#bcglogiysk .gt_group_heading {
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
&#10;#bcglogiysk .gt_empty_group_heading {
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
&#10;#bcglogiysk .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#bcglogiysk .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#bcglogiysk .gt_row {
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
&#10;#bcglogiysk .gt_stub {
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
&#10;#bcglogiysk .gt_stub_row_group {
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
&#10;#bcglogiysk .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#bcglogiysk .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#bcglogiysk .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#bcglogiysk .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#bcglogiysk .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#bcglogiysk .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#bcglogiysk .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#bcglogiysk .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#bcglogiysk .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#bcglogiysk .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#bcglogiysk .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#bcglogiysk .gt_footnotes {
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
&#10;#bcglogiysk .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#bcglogiysk .gt_sourcenotes {
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
&#10;#bcglogiysk .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#bcglogiysk .gt_left {
  text-align: left;
}
&#10;#bcglogiysk .gt_center {
  text-align: center;
}
&#10;#bcglogiysk .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#bcglogiysk .gt_font_normal {
  font-weight: normal;
}
&#10;#bcglogiysk .gt_font_bold {
  font-weight: bold;
}
&#10;#bcglogiysk .gt_font_italic {
  font-style: italic;
}
&#10;#bcglogiysk .gt_super {
  font-size: 65%;
}
&#10;#bcglogiysk .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#bcglogiysk .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#bcglogiysk .gt_indent_1 {
  text-indent: 5px;
}
&#10;#bcglogiysk .gt_indent_2 {
  text-indent: 10px;
}
&#10;#bcglogiysk .gt_indent_3 {
  text-indent: 15px;
}
&#10;#bcglogiysk .gt_indent_4 {
  text-indent: 20px;
}
&#10;#bcglogiysk .gt_indent_5 {
  text-indent: 25px;
}
&#10;#bcglogiysk .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#bcglogiysk div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="8" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">Model Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="unit">Unit</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="variability"></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low">70% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse">RSE (%)</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="shrinkage">Shrinkage (%)</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVCL</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.33</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.21, 1.44]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">8.41</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVV</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">40.2</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[37.2, 43.1]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">7.07</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVKA</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>1/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.21</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.10, 1.33]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">9.06</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual variance parameters">Interindividual variance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM1-TVCL</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0702, 0.175]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">41.2</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">13.1</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM2-TVV</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.124</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.3%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0858, 0.162]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">29.7</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">4.63</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM3-TVKA</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0641, 0.181]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">46.0</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">24.3</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual covariance parameters">Interindividual covariance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual covariance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM1,2-TVCL-TVV</span></td>
<td headers="Interindividual covariance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  estimate" class="gt_row gt_right">0.0745</td>
<td headers="Interindividual covariance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(Corr = 0.606)</span></td>
<td headers="Interindividual covariance parameters  ci_low" class="gt_row gt_right">[0.0421, 0.107]</td>
<td headers="Interindividual covariance parameters  rse" class="gt_row gt_right">42.0</td>
<td headers="Interindividual covariance parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual variance">Residual variance</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual variance  name" class="gt_row gt_left"><span class='gt_from_md'>SIG1</span></td>
<td headers="Residual variance  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual variance  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual variance  estimate" class="gt_row gt_right">0.0375</td>
<td headers="Residual variance  variability" class="gt_row gt_left"><span class='gt_from_md'>(SD = 0.194)</span></td>
<td headers="Residual variance  ci_low" class="gt_row gt_right">[0.0313, 0.0438]</td>
<td headers="Residual variance  rse" class="gt_row gt_right">16.1</td>
<td headers="Residual variance  shrinkage" class="gt_row gt_right">14.4</td></tr>
    <tr><td headers="Residual variance  name" class="gt_row gt_left"><span class='gt_from_md'>SIG2</span></td>
<td headers="Residual variance  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual variance  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual variance  estimate" class="gt_row gt_right">0.00527</td>
<td headers="Residual variance  variability" class="gt_row gt_left"><span class='gt_from_md'>(SD = 0.0726)</span></td>
<td headers="Residual variance  ci_low" class="gt_row gt_right">[−0.00427, 0.0148]</td>
<td headers="Residual variance  rse" class="gt_row gt_right">175</td>
<td headers="Residual variance  shrinkage" class="gt_row gt_right">14.4</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> First Order Conditional Estimation with Interaction | Objective function value: -109.826 | Condition Number: 6.17</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>70% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.15</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.15} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.15</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>CV% for log-normal <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ω</mi></mrow><annotation encoding="application/x-tex">\Omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Ω</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\mathrm{Estimate}) - 1} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CI = confidence intervals; RSE = relative standard error; SE = standard error;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CV = coefficient of variation; SD = standard deviation; Corr = correlation</td>
    </tr>
  </tfoot>
</table>
</div>

# Changing summary info shown

``` r
spec <- TableSpec(
  display_transforms = list(omega = c("cv")),
  sections = section_rules(
    kind == "THETA" ~ "Structural model parameters",
    kind == "OMEGA" & diagonal ~ "Interindividual variance parameters",
    kind == "OMEGA" & !diagonal ~ "Interindividual covariance parameters",
    kind == "SIGMA" ~ "Residual variance",
    TRUE ~ "Other"
  ),
  ci_level = 0.7,
  n_sigfig = 3,
  name_source = "display"
)

mod_sum <- get_model_summary(file.path(model_dir, model_run))
info <- get_model_parameter_info(file.path(model_dir, model_run), lookup_path = normalizePath("../inst/lookup.toml"))

get_parameters(file.path(model_dir, model_run)) |>
  apply_table_spec(spec, info) |>
  add_summary_info(mod_sum, show_cond_num = FALSE) |>
  make_parameter_table()
```

<div id="sqcwbhgcat" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#sqcwbhgcat table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#sqcwbhgcat thead, #sqcwbhgcat tbody, #sqcwbhgcat tfoot, #sqcwbhgcat tr, #sqcwbhgcat td, #sqcwbhgcat th {
  border-style: none;
}
&#10;#sqcwbhgcat p {
  margin: 0;
  padding: 0;
}
&#10;#sqcwbhgcat .gt_table {
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
&#10;#sqcwbhgcat .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#sqcwbhgcat .gt_title {
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
&#10;#sqcwbhgcat .gt_subtitle {
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
&#10;#sqcwbhgcat .gt_heading {
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
&#10;#sqcwbhgcat .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#sqcwbhgcat .gt_col_headings {
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
&#10;#sqcwbhgcat .gt_col_heading {
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
&#10;#sqcwbhgcat .gt_column_spanner_outer {
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
&#10;#sqcwbhgcat .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#sqcwbhgcat .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#sqcwbhgcat .gt_column_spanner {
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
&#10;#sqcwbhgcat .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#sqcwbhgcat .gt_group_heading {
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
&#10;#sqcwbhgcat .gt_empty_group_heading {
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
&#10;#sqcwbhgcat .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#sqcwbhgcat .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#sqcwbhgcat .gt_row {
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
&#10;#sqcwbhgcat .gt_stub {
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
&#10;#sqcwbhgcat .gt_stub_row_group {
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
&#10;#sqcwbhgcat .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#sqcwbhgcat .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#sqcwbhgcat .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#sqcwbhgcat .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#sqcwbhgcat .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#sqcwbhgcat .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#sqcwbhgcat .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#sqcwbhgcat .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#sqcwbhgcat .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#sqcwbhgcat .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#sqcwbhgcat .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#sqcwbhgcat .gt_footnotes {
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
&#10;#sqcwbhgcat .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#sqcwbhgcat .gt_sourcenotes {
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
&#10;#sqcwbhgcat .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#sqcwbhgcat .gt_left {
  text-align: left;
}
&#10;#sqcwbhgcat .gt_center {
  text-align: center;
}
&#10;#sqcwbhgcat .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#sqcwbhgcat .gt_font_normal {
  font-weight: normal;
}
&#10;#sqcwbhgcat .gt_font_bold {
  font-weight: bold;
}
&#10;#sqcwbhgcat .gt_font_italic {
  font-style: italic;
}
&#10;#sqcwbhgcat .gt_super {
  font-size: 65%;
}
&#10;#sqcwbhgcat .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#sqcwbhgcat .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#sqcwbhgcat .gt_indent_1 {
  text-indent: 5px;
}
&#10;#sqcwbhgcat .gt_indent_2 {
  text-indent: 10px;
}
&#10;#sqcwbhgcat .gt_indent_3 {
  text-indent: 15px;
}
&#10;#sqcwbhgcat .gt_indent_4 {
  text-indent: 20px;
}
&#10;#sqcwbhgcat .gt_indent_5 {
  text-indent: 25px;
}
&#10;#sqcwbhgcat .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#sqcwbhgcat div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="8" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">Model Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="unit">Unit</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="variability"></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low">70% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse">RSE (%)</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="shrinkage">Shrinkage (%)</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>CL</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.33</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.21, 1.44]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">8.41</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>Vc</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">40.2</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[37.2, 43.1]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">7.07</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>KA</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>1/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.21</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.10, 1.33]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">9.06</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual variance parameters">Interindividual variance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0702, 0.175]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">41.2</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">13.1</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-Vc</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.124</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.3%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0858, 0.162]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">29.7</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">4.63</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-KA</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0641, 0.181]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">46.0</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">24.3</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual covariance parameters">Interindividual covariance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual covariance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL-Vc</span></td>
<td headers="Interindividual covariance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  estimate" class="gt_row gt_right">0.0745</td>
<td headers="Interindividual covariance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(Corr = 0.606)</span></td>
<td headers="Interindividual covariance parameters  ci_low" class="gt_row gt_right">[0.0421, 0.107]</td>
<td headers="Interindividual covariance parameters  rse" class="gt_row gt_right">42.0</td>
<td headers="Interindividual covariance parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual variance">Residual variance</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual variance  name" class="gt_row gt_left"><span class='gt_from_md'>PropErr</span></td>
<td headers="Residual variance  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual variance  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual variance  estimate" class="gt_row gt_right">0.0375</td>
<td headers="Residual variance  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 19.4%)</span></td>
<td headers="Residual variance  ci_low" class="gt_row gt_right">[0.0313, 0.0438]</td>
<td headers="Residual variance  rse" class="gt_row gt_right">16.1</td>
<td headers="Residual variance  shrinkage" class="gt_row gt_right">14.4</td></tr>
    <tr><td headers="Residual variance  name" class="gt_row gt_left"><span class='gt_from_md'>AddErr</span></td>
<td headers="Residual variance  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual variance  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual variance  estimate" class="gt_row gt_right">0.00527</td>
<td headers="Residual variance  variability" class="gt_row gt_left"><span class='gt_from_md'>(SD = 0.0726)</span></td>
<td headers="Residual variance  ci_low" class="gt_row gt_right">[−0.00427, 0.0148]</td>
<td headers="Residual variance  rse" class="gt_row gt_right">175</td>
<td headers="Residual variance  shrinkage" class="gt_row gt_right">14.4</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> First Order Conditional Estimation with Interaction | Objective function value: -109.826</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>70% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.15</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.15} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.15</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>CV% for log-normal <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ω</mi></mrow><annotation encoding="application/x-tex">\Omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Ω</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\mathrm{Estimate}) - 1} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>CV% for proportional <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\mathrm{Estimate}} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathrm">Estimate</span></span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CI = confidence intervals; RSE = relative standard error; SE = standard error;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CV = coefficient of variation; SD = standard deviation; Corr = correlation</td>
    </tr>
  </tfoot>
</table>
</div>

``` r
get_parameters(file.path(model_dir, model_run)) |>
  apply_table_spec(spec, info) |>
  add_summary_info(mod_sum, show_cond_num = FALSE, show_ofv = FALSE) |>
  make_parameter_table()
```

<div id="itxrexzgll" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#itxrexzgll table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#itxrexzgll thead, #itxrexzgll tbody, #itxrexzgll tfoot, #itxrexzgll tr, #itxrexzgll td, #itxrexzgll th {
  border-style: none;
}
&#10;#itxrexzgll p {
  margin: 0;
  padding: 0;
}
&#10;#itxrexzgll .gt_table {
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
&#10;#itxrexzgll .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#itxrexzgll .gt_title {
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
&#10;#itxrexzgll .gt_subtitle {
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
&#10;#itxrexzgll .gt_heading {
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
&#10;#itxrexzgll .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#itxrexzgll .gt_col_headings {
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
&#10;#itxrexzgll .gt_col_heading {
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
&#10;#itxrexzgll .gt_column_spanner_outer {
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
&#10;#itxrexzgll .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#itxrexzgll .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#itxrexzgll .gt_column_spanner {
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
&#10;#itxrexzgll .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#itxrexzgll .gt_group_heading {
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
&#10;#itxrexzgll .gt_empty_group_heading {
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
&#10;#itxrexzgll .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#itxrexzgll .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#itxrexzgll .gt_row {
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
&#10;#itxrexzgll .gt_stub {
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
&#10;#itxrexzgll .gt_stub_row_group {
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
&#10;#itxrexzgll .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#itxrexzgll .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#itxrexzgll .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#itxrexzgll .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#itxrexzgll .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#itxrexzgll .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#itxrexzgll .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#itxrexzgll .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#itxrexzgll .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#itxrexzgll .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#itxrexzgll .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#itxrexzgll .gt_footnotes {
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
&#10;#itxrexzgll .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#itxrexzgll .gt_sourcenotes {
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
&#10;#itxrexzgll .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#itxrexzgll .gt_left {
  text-align: left;
}
&#10;#itxrexzgll .gt_center {
  text-align: center;
}
&#10;#itxrexzgll .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#itxrexzgll .gt_font_normal {
  font-weight: normal;
}
&#10;#itxrexzgll .gt_font_bold {
  font-weight: bold;
}
&#10;#itxrexzgll .gt_font_italic {
  font-style: italic;
}
&#10;#itxrexzgll .gt_super {
  font-size: 65%;
}
&#10;#itxrexzgll .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#itxrexzgll .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#itxrexzgll .gt_indent_1 {
  text-indent: 5px;
}
&#10;#itxrexzgll .gt_indent_2 {
  text-indent: 10px;
}
&#10;#itxrexzgll .gt_indent_3 {
  text-indent: 15px;
}
&#10;#itxrexzgll .gt_indent_4 {
  text-indent: 20px;
}
&#10;#itxrexzgll .gt_indent_5 {
  text-indent: 25px;
}
&#10;#itxrexzgll .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#itxrexzgll div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="8" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">Model Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="unit">Unit</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="variability"></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low">70% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse">RSE (%)</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="shrinkage">Shrinkage (%)</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>CL</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.33</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.21, 1.44]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">8.41</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>Vc</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">40.2</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[37.2, 43.1]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">7.07</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>KA</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>1/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.21</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.10, 1.33]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">9.06</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual variance parameters">Interindividual variance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0702, 0.175]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">41.2</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">13.1</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-Vc</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.124</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.3%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0858, 0.162]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">29.7</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">4.63</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-KA</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0641, 0.181]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">46.0</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">24.3</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual covariance parameters">Interindividual covariance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual covariance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL-Vc</span></td>
<td headers="Interindividual covariance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  estimate" class="gt_row gt_right">0.0745</td>
<td headers="Interindividual covariance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(Corr = 0.606)</span></td>
<td headers="Interindividual covariance parameters  ci_low" class="gt_row gt_right">[0.0421, 0.107]</td>
<td headers="Interindividual covariance parameters  rse" class="gt_row gt_right">42.0</td>
<td headers="Interindividual covariance parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual variance">Residual variance</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual variance  name" class="gt_row gt_left"><span class='gt_from_md'>PropErr</span></td>
<td headers="Residual variance  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual variance  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual variance  estimate" class="gt_row gt_right">0.0375</td>
<td headers="Residual variance  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 19.4%)</span></td>
<td headers="Residual variance  ci_low" class="gt_row gt_right">[0.0313, 0.0438]</td>
<td headers="Residual variance  rse" class="gt_row gt_right">16.1</td>
<td headers="Residual variance  shrinkage" class="gt_row gt_right">14.4</td></tr>
    <tr><td headers="Residual variance  name" class="gt_row gt_left"><span class='gt_from_md'>AddErr</span></td>
<td headers="Residual variance  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual variance  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual variance  estimate" class="gt_row gt_right">0.00527</td>
<td headers="Residual variance  variability" class="gt_row gt_left"><span class='gt_from_md'>(SD = 0.0726)</span></td>
<td headers="Residual variance  ci_low" class="gt_row gt_right">[−0.00427, 0.0148]</td>
<td headers="Residual variance  rse" class="gt_row gt_right">175</td>
<td headers="Residual variance  shrinkage" class="gt_row gt_right">14.4</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> First Order Conditional Estimation with Interaction</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>70% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.15</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.15} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.15</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>CV% for log-normal <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ω</mi></mrow><annotation encoding="application/x-tex">\Omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Ω</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\mathrm{Estimate}) - 1} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>CV% for proportional <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\mathrm{Estimate}} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathrm">Estimate</span></span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CI = confidence intervals; RSE = relative standard error; SE = standard error;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CV = coefficient of variation; SD = standard deviation; Corr = correlation</td>
    </tr>
  </tfoot>
</table>
</div>

``` r
get_parameters(file.path(model_dir, model_run)) |>
  apply_table_spec(spec, info) |>
  add_summary_info(mod_sum, show_method = FALSE) |>
  make_parameter_table()
```

<div id="xuggjzbdjw" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#xuggjzbdjw table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#xuggjzbdjw thead, #xuggjzbdjw tbody, #xuggjzbdjw tfoot, #xuggjzbdjw tr, #xuggjzbdjw td, #xuggjzbdjw th {
  border-style: none;
}
&#10;#xuggjzbdjw p {
  margin: 0;
  padding: 0;
}
&#10;#xuggjzbdjw .gt_table {
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
&#10;#xuggjzbdjw .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#xuggjzbdjw .gt_title {
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
&#10;#xuggjzbdjw .gt_subtitle {
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
&#10;#xuggjzbdjw .gt_heading {
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
&#10;#xuggjzbdjw .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#xuggjzbdjw .gt_col_headings {
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
&#10;#xuggjzbdjw .gt_col_heading {
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
&#10;#xuggjzbdjw .gt_column_spanner_outer {
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
&#10;#xuggjzbdjw .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#xuggjzbdjw .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#xuggjzbdjw .gt_column_spanner {
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
&#10;#xuggjzbdjw .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#xuggjzbdjw .gt_group_heading {
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
&#10;#xuggjzbdjw .gt_empty_group_heading {
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
&#10;#xuggjzbdjw .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#xuggjzbdjw .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#xuggjzbdjw .gt_row {
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
&#10;#xuggjzbdjw .gt_stub {
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
&#10;#xuggjzbdjw .gt_stub_row_group {
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
&#10;#xuggjzbdjw .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#xuggjzbdjw .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#xuggjzbdjw .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#xuggjzbdjw .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#xuggjzbdjw .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#xuggjzbdjw .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#xuggjzbdjw .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#xuggjzbdjw .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#xuggjzbdjw .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#xuggjzbdjw .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#xuggjzbdjw .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#xuggjzbdjw .gt_footnotes {
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
&#10;#xuggjzbdjw .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#xuggjzbdjw .gt_sourcenotes {
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
&#10;#xuggjzbdjw .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#xuggjzbdjw .gt_left {
  text-align: left;
}
&#10;#xuggjzbdjw .gt_center {
  text-align: center;
}
&#10;#xuggjzbdjw .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#xuggjzbdjw .gt_font_normal {
  font-weight: normal;
}
&#10;#xuggjzbdjw .gt_font_bold {
  font-weight: bold;
}
&#10;#xuggjzbdjw .gt_font_italic {
  font-style: italic;
}
&#10;#xuggjzbdjw .gt_super {
  font-size: 65%;
}
&#10;#xuggjzbdjw .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#xuggjzbdjw .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#xuggjzbdjw .gt_indent_1 {
  text-indent: 5px;
}
&#10;#xuggjzbdjw .gt_indent_2 {
  text-indent: 10px;
}
&#10;#xuggjzbdjw .gt_indent_3 {
  text-indent: 15px;
}
&#10;#xuggjzbdjw .gt_indent_4 {
  text-indent: 20px;
}
&#10;#xuggjzbdjw .gt_indent_5 {
  text-indent: 25px;
}
&#10;#xuggjzbdjw .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#xuggjzbdjw div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="8" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">Model Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="unit">Unit</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="variability"></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low">70% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse">RSE (%)</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="shrinkage">Shrinkage (%)</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>CL</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.33</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.21, 1.44]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">8.41</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>Vc</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>L</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">40.2</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[37.2, 43.1]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">7.07</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>KA</span></td>
<td headers="Structural model parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit" class="gt_row gt_left"><span class='gt_from_md'>1/hr</span></td>
<td headers="Structural model parameters  estimate" class="gt_row gt_right">1.21</td>
<td headers="Structural model parameters  variability" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  ci_low" class="gt_row gt_right">[1.10, 1.33]</td>
<td headers="Structural model parameters  rse" class="gt_row gt_right">9.06</td>
<td headers="Structural model parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual variance parameters">Interindividual variance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0702, 0.175]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">41.2</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">13.1</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-Vc</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.124</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.3%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0858, 0.162]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">29.7</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">4.63</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-KA</span></td>
<td headers="Interindividual variance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 36.1%)</span></td>
<td headers="Interindividual variance parameters  ci_low" class="gt_row gt_right">[0.0641, 0.181]</td>
<td headers="Interindividual variance parameters  rse" class="gt_row gt_right">46.0</td>
<td headers="Interindividual variance parameters  shrinkage" class="gt_row gt_right">24.3</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual covariance parameters">Interindividual covariance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual covariance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>IIV-CL-Vc</span></td>
<td headers="Interindividual covariance parameters  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  unit" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  estimate" class="gt_row gt_right">0.0745</td>
<td headers="Interindividual covariance parameters  variability" class="gt_row gt_left"><span class='gt_from_md'>(Corr = 0.606)</span></td>
<td headers="Interindividual covariance parameters  ci_low" class="gt_row gt_right">[0.0421, 0.107]</td>
<td headers="Interindividual covariance parameters  rse" class="gt_row gt_right">42.0</td>
<td headers="Interindividual covariance parameters  shrinkage" class="gt_row gt_right"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="8" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual variance">Residual variance</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual variance  name" class="gt_row gt_left"><span class='gt_from_md'>PropErr</span></td>
<td headers="Residual variance  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual variance  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual variance  estimate" class="gt_row gt_right">0.0375</td>
<td headers="Residual variance  variability" class="gt_row gt_left"><span class='gt_from_md'>(CV = 19.4%)</span></td>
<td headers="Residual variance  ci_low" class="gt_row gt_right">[0.0313, 0.0438]</td>
<td headers="Residual variance  rse" class="gt_row gt_right">16.1</td>
<td headers="Residual variance  shrinkage" class="gt_row gt_right">14.4</td></tr>
    <tr><td headers="Residual variance  name" class="gt_row gt_left"><span class='gt_from_md'>AddErr</span></td>
<td headers="Residual variance  symbol" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual variance  unit" class="gt_row gt_left"><br /></td>
<td headers="Residual variance  estimate" class="gt_row gt_right">0.00527</td>
<td headers="Residual variance  variability" class="gt_row gt_left"><span class='gt_from_md'>(SD = 0.0726)</span></td>
<td headers="Residual variance  ci_low" class="gt_row gt_right">[−0.00427, 0.0148]</td>
<td headers="Residual variance  rse" class="gt_row gt_right">175</td>
<td headers="Residual variance  shrinkage" class="gt_row gt_right">14.4</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> Objective function value: -109.826 | Condition Number: 6.17</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>70% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.15</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.15} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.15</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>CV% for log-normal <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ω</mi></mrow><annotation encoding="application/x-tex">\Omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Ω</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\mathrm{Estimate}) - 1} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> <span class='gt_from_md'>CV% for proportional <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span></span></span></span>: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msqrt><mo>×</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\sqrt{\mathrm{Estimate}} \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathrm">Estimate</span></span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CI = confidence intervals; RSE = relative standard error; SE = standard error;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="8"> CV = coefficient of variation; SD = standard deviation; Corr = correlation</td>
    </tr>
  </tfoot>
</table>
</div>

# Model Comparison

``` r
spec <- TableSpec(
  display_transforms = list(omega = c("cv")),
  sections = section_rules(
    kind == "THETA" ~ "Structural model parameters",
    kind == "OMEGA" & diagonal ~ "Interindividual variance parameters",
    kind == "OMEGA" & !diagonal ~ "Interindividual covariance parameters",
    kind == "SIGMA" ~ "Residual variance",
    TRUE ~ "Other"
  ),
  n_sigfig = 3,
  drop_columns = c("variability", "shrinkage", "rse"),
  pvalue_scientific = FALSE
)

child_sum <- get_model_summary(file.path(model_dir, model_run))
child_info <- get_model_parameter_info(file.path(model_dir, model_run))

mod_sum <- get_model_summary(file.path(model_dir, "run002"))
info <- get_model_parameter_info(file.path(model_dir, "run002"))

get_parameters(file.path(model_dir, "run002")) |>
  apply_table_spec(spec, info) |>
  add_summary_info(mod_sum) |>
  compare_with(
    get_parameters(file.path(model_dir, model_run)) |>
      apply_table_spec(spec, child_info) |>
      add_summary_info(child_sum),
    labels = c("run002", "run003")
  ) |>
  make_comparison_table()
```

<div id="myofxpozkr" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#myofxpozkr table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#myofxpozkr thead, #myofxpozkr tbody, #myofxpozkr tfoot, #myofxpozkr tr, #myofxpozkr td, #myofxpozkr th {
  border-style: none;
}
&#10;#myofxpozkr p {
  margin: 0;
  padding: 0;
}
&#10;#myofxpozkr .gt_table {
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
&#10;#myofxpozkr .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#myofxpozkr .gt_title {
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
&#10;#myofxpozkr .gt_subtitle {
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
&#10;#myofxpozkr .gt_heading {
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
&#10;#myofxpozkr .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#myofxpozkr .gt_col_headings {
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
&#10;#myofxpozkr .gt_col_heading {
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
&#10;#myofxpozkr .gt_column_spanner_outer {
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
&#10;#myofxpozkr .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#myofxpozkr .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#myofxpozkr .gt_column_spanner {
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
&#10;#myofxpozkr .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#myofxpozkr .gt_group_heading {
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
&#10;#myofxpozkr .gt_empty_group_heading {
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
&#10;#myofxpozkr .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#myofxpozkr .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#myofxpozkr .gt_row {
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
&#10;#myofxpozkr .gt_stub {
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
&#10;#myofxpozkr .gt_stub_row_group {
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
&#10;#myofxpozkr .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#myofxpozkr .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#myofxpozkr .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#myofxpozkr .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#myofxpozkr .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#myofxpozkr .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#myofxpozkr .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#myofxpozkr .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#myofxpozkr .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#myofxpozkr .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#myofxpozkr .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#myofxpozkr .gt_footnotes {
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
&#10;#myofxpozkr .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#myofxpozkr .gt_sourcenotes {
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
&#10;#myofxpozkr .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#myofxpozkr .gt_left {
  text-align: left;
}
&#10;#myofxpozkr .gt_center {
  text-align: center;
}
&#10;#myofxpozkr .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#myofxpozkr .gt_font_normal {
  font-weight: normal;
}
&#10;#myofxpozkr .gt_font_bold {
  font-weight: bold;
}
&#10;#myofxpozkr .gt_font_italic {
  font-style: italic;
}
&#10;#myofxpozkr .gt_super {
  font-size: 65%;
}
&#10;#myofxpozkr .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#myofxpozkr .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#myofxpozkr .gt_indent_1 {
  text-indent: 5px;
}
&#10;#myofxpozkr .gt_indent_2 {
  text-indent: 10px;
}
&#10;#myofxpozkr .gt_indent_3 {
  text-indent: 15px;
}
&#10;#myofxpozkr .gt_indent_4 {
  text-indent: 20px;
}
&#10;#myofxpozkr .gt_indent_5 {
  text-indent: 25px;
}
&#10;#myofxpozkr .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#myofxpozkr div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="10" class="gt_heading gt_title gt_font_normal gt_bottom_border" style>Model Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings gt_spanner_row">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="2" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_center gt_columns_top_border gt_column_spanner_outer" rowspan="1" colspan="4" style="font-weight: bold;" scope="colgroup" id="run002">
        <div class="gt_column_spanner">run002</div>
      </th>
      <th class="gt_center gt_columns_top_border gt_column_spanner_outer" rowspan="1" colspan="5" style="font-weight: bold;" scope="colgroup" id="run003">
        <div class="gt_column_spanner">run003</div>
      </th>
    </tr>
    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol_1">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="unit_1">Unit</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate_1">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low_1">95% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol_2">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="unit_2">Unit</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate_2">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low_2">95% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="pct_change_2">% Change</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="10" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVCL</span></td>
<td headers="Structural model parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit_1" class="gt_row gt_left"><span class='gt_from_md'>L/hr</span></td>
<td headers="Structural model parameters  estimate_1" class="gt_row gt_right">1.25</td>
<td headers="Structural model parameters  ci_low_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">[0.994, 1.50]</td>
<td headers="Structural model parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit_2" class="gt_row gt_left"><span class='gt_from_md'>L/hr</span></td>
<td headers="Structural model parameters  estimate_2" class="gt_row gt_right">1.33</td>
<td headers="Structural model parameters  ci_low_2" class="gt_row gt_right">[1.11, 1.54]</td>
<td headers="Structural model parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">6.31</td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVV</span></td>
<td headers="Structural model parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit_1" class="gt_row gt_left"><span class='gt_from_md'>L</span></td>
<td headers="Structural model parameters  estimate_1" class="gt_row gt_right">40.8</td>
<td headers="Structural model parameters  ci_low_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">[34.9, 46.8]</td>
<td headers="Structural model parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit_2" class="gt_row gt_left"><span class='gt_from_md'>L</span></td>
<td headers="Structural model parameters  estimate_2" class="gt_row gt_right">40.2</td>
<td headers="Structural model parameters  ci_low_2" class="gt_row gt_right">[34.6, 45.7]</td>
<td headers="Structural model parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">−1.68</td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVKA</span></td>
<td headers="Structural model parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit_1" class="gt_row gt_left"><span class='gt_from_md'>1/hr</span></td>
<td headers="Structural model parameters  estimate_1" class="gt_row gt_right">1.24</td>
<td headers="Structural model parameters  ci_low_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">[1.02, 1.47]</td>
<td headers="Structural model parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  unit_2" class="gt_row gt_left"><span class='gt_from_md'>1/hr</span></td>
<td headers="Structural model parameters  estimate_2" class="gt_row gt_right">1.21</td>
<td headers="Structural model parameters  ci_low_2" class="gt_row gt_right">[0.997, 1.43]</td>
<td headers="Structural model parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">−2.59</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="10" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual variance parameters">Interindividual variance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM1-TVCL</span></td>
<td headers="Interindividual variance parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit_1" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate_1" class="gt_row gt_right">0.130</td>
<td headers="Interindividual variance parameters  ci_low_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">[0.0125, 0.248]</td>
<td headers="Interindividual variance parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit_2" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate_2" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  ci_low_2" class="gt_row gt_right">[0.0236, 0.221]</td>
<td headers="Interindividual variance parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">−6.19</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM2-TVV</span></td>
<td headers="Interindividual variance parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit_1" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate_1" class="gt_row gt_right">0.136</td>
<td headers="Interindividual variance parameters  ci_low_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">[0.0585, 0.214]</td>
<td headers="Interindividual variance parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit_2" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate_2" class="gt_row gt_right">0.124</td>
<td headers="Interindividual variance parameters  ci_low_2" class="gt_row gt_right">[0.0519, 0.196]</td>
<td headers="Interindividual variance parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">−9.14</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM3-TVKA</span></td>
<td headers="Interindividual variance parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit_1" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate_1" class="gt_row gt_right">0.114</td>
<td headers="Interindividual variance parameters  ci_low_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">[−0.00602, 0.235]</td>
<td headers="Interindividual variance parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  unit_2" class="gt_row gt_left"><br /></td>
<td headers="Interindividual variance parameters  estimate_2" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  ci_low_2" class="gt_row gt_right">[0.0121, 0.233]</td>
<td headers="Interindividual variance parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">7.00</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="10" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual covariance parameters">Interindividual covariance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual covariance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM1,2-TVCL-TVV</span></td>
<td headers="Interindividual covariance parameters  symbol_1" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  unit_1" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  estimate_1" class="gt_row gt_right"><br /></td>
<td headers="Interindividual covariance parameters  ci_low_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Interindividual covariance parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  unit_2" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  estimate_2" class="gt_row gt_right">0.0745</td>
<td headers="Interindividual covariance parameters  ci_low_2" class="gt_row gt_right">[0.0131, 0.136]</td>
<td headers="Interindividual covariance parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="10" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual variance">Residual variance</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual variance  name" class="gt_row gt_left"><span class='gt_from_md'>SIG1</span></td>
<td headers="Residual variance  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual variance  unit_1" class="gt_row gt_left"><br /></td>
<td headers="Residual variance  estimate_1" class="gt_row gt_right">0.0372</td>
<td headers="Residual variance  ci_low_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">[0.0145, 0.0600]</td>
<td headers="Residual variance  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual variance  unit_2" class="gt_row gt_left"><br /></td>
<td headers="Residual variance  estimate_2" class="gt_row gt_right">0.0375</td>
<td headers="Residual variance  ci_low_2" class="gt_row gt_right">[0.0257, 0.0494]</td>
<td headers="Residual variance  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.820</td></tr>
    <tr><td headers="Residual variance  name" class="gt_row gt_left"><span class='gt_from_md'>SIG2</span></td>
<td headers="Residual variance  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual variance  unit_1" class="gt_row gt_left"><br /></td>
<td headers="Residual variance  estimate_1" class="gt_row gt_right">0.00661</td>
<td headers="Residual variance  ci_low_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">[−0.0481, 0.0613]</td>
<td headers="Residual variance  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual variance  unit_2" class="gt_row gt_left"><br /></td>
<td headers="Residual variance  estimate_2" class="gt_row gt_right">0.00527</td>
<td headers="Residual variance  ci_low_2" class="gt_row gt_right">[−0.0128, 0.0233]</td>
<td headers="Residual variance  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">−20.2</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="10"> Condition Number: 29.6 (run002), 6.17 (run003)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="10"> No. of Observations: 210 (run002), 210 (run003)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="10"> OFV: -103.468 (run002), -109.826 (run003)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="10"> <span class='gt_from_md'>95% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.025</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.025} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.025</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="10"> <span class='gt_from_md'>% Change: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><msub><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>−</mo><msub><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi></mrow></msub></mrow><msub><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi></mrow></msub></mfrac><mo>⋅</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\frac{\mathrm{Estimate}_{\mathrm{model}} - \mathrm{Estimate}_{\mathrm{ref}}}{\mathrm{Estimate}_{\mathrm{ref}}} \cdot 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3451em;vertical-align:-0.4509em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8942em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight">Estimate</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight" style="margin-right:0.07778em;">ref</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.4159em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight">Estimate</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight">model</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span><span class="mbin mtight">−</span><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight">Estimate</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight" style="margin-right:0.07778em;">ref</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4509em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="10"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="10"> CI = confidence intervals; RSE = relative standard error; SE = standard error;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="10"> OFV = Objective Function Value</td>
    </tr>
  </tfoot>
</table>
</div>

## Multiple Comparison Table

``` r
spec <- TableSpec(
  display_transforms = list(omega = c("cv")),
  sections = section_rules(
    kind == "THETA" ~ "Structural model parameters",
    kind == "OMEGA" & diagonal ~ "Interindividual variance parameters",
    kind == "OMEGA" & !diagonal ~ "Interindividual covariance parameters",
    kind == "SIGMA" ~ "Residual error",
    TRUE ~ "Other"
  ),
  n_sigfig = 3,
  n_decimals_ofv = 3,
  columns = c("symbol", "estimate", "ci", "rse", "pct_change"),
  hide_empty_columns = FALSE
)

mod1 <- read_model(file.path(model_dir, "run002.mod"))
mod_sum1 <- get_model_summary(file.path(model_dir, "run002"))
info1 <- get_model_parameter_info(file.path(model_dir, "run002"))

mod2 <- read_model(file.path(model_dir, "run003.mod"))
mod_sum2 <- get_model_summary(file.path(model_dir, "run003"))
info2 <- get_model_parameter_info(file.path(model_dir, "run003"))

mod3 <- read_model(file.path(model_dir, "run003b1.mod"))
mod_sum3 <- get_model_summary(file.path(model_dir, "run003b1"))
info3 <- get_model_parameter_info(file.path(model_dir, "run003b1"))

comp <- get_parameters(file.path(model_dir, "run002")) |>
  apply_table_spec(spec, info1) |>
  add_summary_info(mod_sum1) |>
  compare_with(
    get_parameters(file.path(model_dir, "run003")) |>
      apply_table_spec(spec, info2) |>
      add_summary_info(mod_sum2),
    labels = c(mod1$filename, mod2$filename)
   ) |>
  compare_with(
    get_parameters(file.path(model_dir, "run003b1")) |>
      apply_table_spec(spec, info3) |>
      add_summary_info(mod_sum3),
      labels = c(mod3$filename)
  )

comp |>
  make_comparison_table()
```

<div id="zlntboxdgb" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#zlntboxdgb table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#zlntboxdgb thead, #zlntboxdgb tbody, #zlntboxdgb tfoot, #zlntboxdgb tr, #zlntboxdgb td, #zlntboxdgb th {
  border-style: none;
}
&#10;#zlntboxdgb p {
  margin: 0;
  padding: 0;
}
&#10;#zlntboxdgb .gt_table {
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
&#10;#zlntboxdgb .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#zlntboxdgb .gt_title {
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
&#10;#zlntboxdgb .gt_subtitle {
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
&#10;#zlntboxdgb .gt_heading {
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
&#10;#zlntboxdgb .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#zlntboxdgb .gt_col_headings {
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
&#10;#zlntboxdgb .gt_col_heading {
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
&#10;#zlntboxdgb .gt_column_spanner_outer {
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
&#10;#zlntboxdgb .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#zlntboxdgb .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#zlntboxdgb .gt_column_spanner {
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
&#10;#zlntboxdgb .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#zlntboxdgb .gt_group_heading {
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
&#10;#zlntboxdgb .gt_empty_group_heading {
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
&#10;#zlntboxdgb .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#zlntboxdgb .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#zlntboxdgb .gt_row {
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
&#10;#zlntboxdgb .gt_stub {
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
&#10;#zlntboxdgb .gt_stub_row_group {
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
&#10;#zlntboxdgb .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#zlntboxdgb .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#zlntboxdgb .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#zlntboxdgb .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#zlntboxdgb .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#zlntboxdgb .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#zlntboxdgb .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#zlntboxdgb .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#zlntboxdgb .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#zlntboxdgb .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#zlntboxdgb .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#zlntboxdgb .gt_footnotes {
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
&#10;#zlntboxdgb .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#zlntboxdgb .gt_sourcenotes {
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
&#10;#zlntboxdgb .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#zlntboxdgb .gt_left {
  text-align: left;
}
&#10;#zlntboxdgb .gt_center {
  text-align: center;
}
&#10;#zlntboxdgb .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#zlntboxdgb .gt_font_normal {
  font-weight: normal;
}
&#10;#zlntboxdgb .gt_font_bold {
  font-weight: bold;
}
&#10;#zlntboxdgb .gt_font_italic {
  font-style: italic;
}
&#10;#zlntboxdgb .gt_super {
  font-size: 65%;
}
&#10;#zlntboxdgb .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#zlntboxdgb .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#zlntboxdgb .gt_indent_1 {
  text-indent: 5px;
}
&#10;#zlntboxdgb .gt_indent_2 {
  text-indent: 10px;
}
&#10;#zlntboxdgb .gt_indent_3 {
  text-indent: 15px;
}
&#10;#zlntboxdgb .gt_indent_4 {
  text-indent: 20px;
}
&#10;#zlntboxdgb .gt_indent_5 {
  text-indent: 25px;
}
&#10;#zlntboxdgb .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#zlntboxdgb div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="15" class="gt_heading gt_title gt_font_normal gt_bottom_border" style>Model Parameters</td>
    </tr>
    &#10;    <tr class="gt_col_headings gt_spanner_row">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="2" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_center gt_columns_top_border gt_column_spanner_outer" rowspan="1" colspan="4" style="font-weight: bold;" scope="colgroup" id="run002">
        <div class="gt_column_spanner">run002</div>
      </th>
      <th class="gt_center gt_columns_top_border gt_column_spanner_outer" rowspan="1" colspan="5" style="font-weight: bold;" scope="colgroup" id="run003">
        <div class="gt_column_spanner">run003</div>
      </th>
      <th class="gt_center gt_columns_top_border gt_column_spanner_outer" rowspan="1" colspan="5" style="font-weight: bold;" scope="colgroup" id="run003b1">
        <div class="gt_column_spanner">run003b1</div>
      </th>
    </tr>
    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol_1">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate_1">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low_1">95% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse_1">RSE (%)</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol_2">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate_2">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low_2">95% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse_2">RSE (%)</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="pct_change_2">% Change vs run002</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol_3">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate_3">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci_low_3">95% CI</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse_3">RSE (%)</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="pct_change_3">% Change vs run003</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="15" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVCL</span></td>
<td headers="Structural model parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate_1" class="gt_row gt_right">1.25</td>
<td headers="Structural model parameters  ci_low_1" class="gt_row gt_right">[0.994, 1.50]</td>
<td headers="Structural model parameters  rse_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">10.3</td>
<td headers="Structural model parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate_2" class="gt_row gt_right">1.33</td>
<td headers="Structural model parameters  ci_low_2" class="gt_row gt_right">[1.11, 1.54]</td>
<td headers="Structural model parameters  rse_2" class="gt_row gt_right">8.41</td>
<td headers="Structural model parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">6.31</td>
<td headers="Structural model parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate_3" class="gt_row gt_right">1.25</td>
<td headers="Structural model parameters  ci_low_3" class="gt_row gt_right"><br /></td>
<td headers="Structural model parameters  rse_3" class="gt_row gt_right"><br /></td>
<td headers="Structural model parameters  pct_change_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">−5.67</td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVV</span></td>
<td headers="Structural model parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate_1" class="gt_row gt_right">40.8</td>
<td headers="Structural model parameters  ci_low_1" class="gt_row gt_right">[34.9, 46.8]</td>
<td headers="Structural model parameters  rse_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">7.41</td>
<td headers="Structural model parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate_2" class="gt_row gt_right">40.2</td>
<td headers="Structural model parameters  ci_low_2" class="gt_row gt_right">[34.6, 45.7]</td>
<td headers="Structural model parameters  rse_2" class="gt_row gt_right">7.07</td>
<td headers="Structural model parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">−1.68</td>
<td headers="Structural model parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate_3" class="gt_row gt_right">40.3</td>
<td headers="Structural model parameters  ci_low_3" class="gt_row gt_right"><br /></td>
<td headers="Structural model parameters  rse_3" class="gt_row gt_right"><br /></td>
<td headers="Structural model parameters  pct_change_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.296</td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVKA</span></td>
<td headers="Structural model parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate_1" class="gt_row gt_right">1.24</td>
<td headers="Structural model parameters  ci_low_1" class="gt_row gt_right">[1.02, 1.47]</td>
<td headers="Structural model parameters  rse_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">9.12</td>
<td headers="Structural model parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate_2" class="gt_row gt_right">1.21</td>
<td headers="Structural model parameters  ci_low_2" class="gt_row gt_right">[0.997, 1.43]</td>
<td headers="Structural model parameters  rse_2" class="gt_row gt_right">9.06</td>
<td headers="Structural model parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">−2.59</td>
<td headers="Structural model parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>4</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{4}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">4</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate_3" class="gt_row gt_right">1.22</td>
<td headers="Structural model parameters  ci_low_3" class="gt_row gt_right"><br /></td>
<td headers="Structural model parameters  rse_3" class="gt_row gt_right"><br /></td>
<td headers="Structural model parameters  pct_change_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.490</td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>WT-on-CL</span></td>
<td headers="Structural model parameters  symbol_1" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  estimate_1" class="gt_row gt_right"><br /></td>
<td headers="Structural model parameters  ci_low_1" class="gt_row gt_right"><br /></td>
<td headers="Structural model parameters  rse_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Structural model parameters  symbol_2" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  estimate_2" class="gt_row gt_right"><br /></td>
<td headers="Structural model parameters  ci_low_2" class="gt_row gt_right"><br /></td>
<td headers="Structural model parameters  rse_2" class="gt_row gt_right"><br /></td>
<td headers="Structural model parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Structural model parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  estimate_3" class="gt_row gt_right">0.545</td>
<td headers="Structural model parameters  ci_low_3" class="gt_row gt_right"><br /></td>
<td headers="Structural model parameters  rse_3" class="gt_row gt_right"><br /></td>
<td headers="Structural model parameters  pct_change_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="15" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual variance parameters">Interindividual variance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM1-TVCL</span></td>
<td headers="Interindividual variance parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate_1" class="gt_row gt_right">0.130</td>
<td headers="Interindividual variance parameters  ci_low_1" class="gt_row gt_right">[0.0125, 0.248]</td>
<td headers="Interindividual variance parameters  rse_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">46.1</td>
<td headers="Interindividual variance parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate_2" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  ci_low_2" class="gt_row gt_right">[0.0236, 0.221]</td>
<td headers="Interindividual variance parameters  rse_2" class="gt_row gt_right">41.2</td>
<td headers="Interindividual variance parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">−6.19</td>
<td headers="Interindividual variance parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate_3" class="gt_row gt_right">0.123</td>
<td headers="Interindividual variance parameters  ci_low_3" class="gt_row gt_right"><br /></td>
<td headers="Interindividual variance parameters  rse_3" class="gt_row gt_right"><br /></td>
<td headers="Interindividual variance parameters  pct_change_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.756</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM2-TVV</span></td>
<td headers="Interindividual variance parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate_1" class="gt_row gt_right">0.136</td>
<td headers="Interindividual variance parameters  ci_low_1" class="gt_row gt_right">[0.0585, 0.214]</td>
<td headers="Interindividual variance parameters  rse_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">29.1</td>
<td headers="Interindividual variance parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate_2" class="gt_row gt_right">0.124</td>
<td headers="Interindividual variance parameters  ci_low_2" class="gt_row gt_right">[0.0519, 0.196]</td>
<td headers="Interindividual variance parameters  rse_2" class="gt_row gt_right">29.7</td>
<td headers="Interindividual variance parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">−9.14</td>
<td headers="Interindividual variance parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate_3" class="gt_row gt_right">0.125</td>
<td headers="Interindividual variance parameters  ci_low_3" class="gt_row gt_right"><br /></td>
<td headers="Interindividual variance parameters  rse_3" class="gt_row gt_right"><br /></td>
<td headers="Interindividual variance parameters  pct_change_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.587</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM3-TVKA</span></td>
<td headers="Interindividual variance parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate_1" class="gt_row gt_right">0.114</td>
<td headers="Interindividual variance parameters  ci_low_1" class="gt_row gt_right">[−0.00602, 0.235]</td>
<td headers="Interindividual variance parameters  rse_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">53.7</td>
<td headers="Interindividual variance parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate_2" class="gt_row gt_right">0.122</td>
<td headers="Interindividual variance parameters  ci_low_2" class="gt_row gt_right">[0.0121, 0.233]</td>
<td headers="Interindividual variance parameters  rse_2" class="gt_row gt_right">46.0</td>
<td headers="Interindividual variance parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">7.00</td>
<td headers="Interindividual variance parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  estimate_3" class="gt_row gt_right">0.124</td>
<td headers="Interindividual variance parameters  ci_low_3" class="gt_row gt_right"><br /></td>
<td headers="Interindividual variance parameters  rse_3" class="gt_row gt_right"><br /></td>
<td headers="Interindividual variance parameters  pct_change_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">1.20</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="15" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual covariance parameters">Interindividual covariance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual covariance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM1,2-TVCL-TVV</span></td>
<td headers="Interindividual covariance parameters  symbol_1" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  estimate_1" class="gt_row gt_right"><br /></td>
<td headers="Interindividual covariance parameters  ci_low_1" class="gt_row gt_right"><br /></td>
<td headers="Interindividual covariance parameters  rse_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Interindividual covariance parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  estimate_2" class="gt_row gt_right">0.0745</td>
<td headers="Interindividual covariance parameters  ci_low_2" class="gt_row gt_right">[0.0131, 0.136]</td>
<td headers="Interindividual covariance parameters  rse_2" class="gt_row gt_right">42.0</td>
<td headers="Interindividual covariance parameters  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Interindividual covariance parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  estimate_3" class="gt_row gt_right">0.0722</td>
<td headers="Interindividual covariance parameters  ci_low_3" class="gt_row gt_right"><br /></td>
<td headers="Interindividual covariance parameters  rse_3" class="gt_row gt_right"><br /></td>
<td headers="Interindividual covariance parameters  pct_change_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">−3.17</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="15" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual error">Residual error</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>SIG1</span></td>
<td headers="Residual error  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  estimate_1" class="gt_row gt_right">0.0372</td>
<td headers="Residual error  ci_low_1" class="gt_row gt_right">[0.0145, 0.0600]</td>
<td headers="Residual error  rse_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">31.2</td>
<td headers="Residual error  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  estimate_2" class="gt_row gt_right">0.0375</td>
<td headers="Residual error  ci_low_2" class="gt_row gt_right">[0.0257, 0.0494]</td>
<td headers="Residual error  rse_2" class="gt_row gt_right">16.1</td>
<td headers="Residual error  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.820</td>
<td headers="Residual error  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  estimate_3" class="gt_row gt_right">0.0374</td>
<td headers="Residual error  ci_low_3" class="gt_row gt_right"><br /></td>
<td headers="Residual error  rse_3" class="gt_row gt_right"><br /></td>
<td headers="Residual error  pct_change_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">−0.496</td></tr>
    <tr><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>SIG2</span></td>
<td headers="Residual error  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  estimate_1" class="gt_row gt_right">0.00661</td>
<td headers="Residual error  ci_low_1" class="gt_row gt_right">[−0.0481, 0.0613]</td>
<td headers="Residual error  rse_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">423</td>
<td headers="Residual error  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  estimate_2" class="gt_row gt_right">0.00527</td>
<td headers="Residual error  ci_low_2" class="gt_row gt_right">[−0.0128, 0.0233]</td>
<td headers="Residual error  rse_2" class="gt_row gt_right">175</td>
<td headers="Residual error  pct_change_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">−20.2</td>
<td headers="Residual error  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  estimate_3" class="gt_row gt_right">0.00589</td>
<td headers="Residual error  ci_low_3" class="gt_row gt_right"><br /></td>
<td headers="Residual error  rse_3" class="gt_row gt_right"><br /></td>
<td headers="Residual error  pct_change_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">11.8</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="15"> Condition Number: 29.6 (run002), 6.17 (run003)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="15"> No. of Observations: 210 (run002), 210 (run003)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="15"> OFV: -103.468 (run002), -109.826 (run003)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="15"> Condition Number: 6.17 (run003), N/A (run003b1)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="15"> No. of Observations: 210 (run003), 210 (run003b1)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="15"> OFV: -109.826 (run003), -108.889 (run003b1)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="15"> <span class='gt_from_md'>95% CI: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mo>±</mo><msub><mi>z</mi><mn>0.025</mn></msub><mo>⋅</mo><mrow><mi mathvariant="normal">S</mi><mi mathvariant="normal">E</mi></mrow></mrow><annotation encoding="application/x-tex">\mathrm{Estimate} \pm z_{0.025} \cdot \mathrm{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathrm">Estimate</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5945em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0.025</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathrm">SE</span></span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="15"> <span class='gt_from_md'>% Change: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><msub><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>−</mo><msub><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi></mrow></msub></mrow><msub><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi></mrow></msub></mfrac><mo>⋅</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\frac{\mathrm{Estimate}_{\mathrm{model}} - \mathrm{Estimate}_{\mathrm{ref}}}{\mathrm{Estimate}_{\mathrm{ref}}} \cdot 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3451em;vertical-align:-0.4509em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8942em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight">Estimate</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight" style="margin-right:0.07778em;">ref</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.4159em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight">Estimate</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight">model</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span><span class="mbin mtight">−</span><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight">Estimate</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight" style="margin-right:0.07778em;">ref</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4509em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="15"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="15"> CI = confidence intervals; RSE = relative standard error; SE = standard error;</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="15"> OFV = Objective Function Value</td>
    </tr>
  </tfoot>
</table>
</div>

## Structural model comparison

``` r
spec <- TableSpec(
  display_transforms = list(omega = c("cv")),
  sections = section_rules(
    kind == "THETA" ~ "Structural model parameters",
    kind == "OMEGA" & diagonal ~ "Interindividual variance parameters",
    kind == "OMEGA" & !diagonal ~ "Interindividual covariance parameters",
    kind == "SIGMA" ~ "Residual error",
    TRUE ~ "Other"
  ),
  n_sigfig = 3,
  n_decimals_ofv = 3,
  columns = c("symbol", "fixed", "estimate"),
  title = "Structural Model Parameter Comparison"
)

mod1 <- read_model(file.path(model_dir, "run001.mod"))
mod_sum1 <- get_model_summary(file.path(model_dir, "run001"))
info1 <- get_model_parameter_info(file.path(model_dir, "run001"))

mod2 <- read_model(file.path(model_dir, "run002.mod"))
mod_sum2 <- get_model_summary(file.path(model_dir, "run002"))
info2 <- get_model_parameter_info(file.path(model_dir, "run002"))

mod3 <- read_model(file.path(model_dir, "run003.mod"))
mod_sum3 <- get_model_summary(file.path(model_dir, "run003"))
info3 <- get_model_parameter_info(file.path(model_dir, "run003"))

mod4 <- read_model(file.path(model_dir, "run003b1.mod"))
mod_sum4 <- get_model_summary(file.path(model_dir, "run003b1"))
info4 <- get_model_parameter_info(file.path(model_dir, "run003b1"))

comp <- get_parameters(file.path(model_dir, "run001")) |>
  apply_table_spec(spec, info1) |>
  add_summary_info(mod_sum1) |>
  compare_with(
    get_parameters(file.path(model_dir, "run002")) |>
      apply_table_spec(spec, info2) |>
      add_summary_info(mod_sum2),
    labels = c(mod1$filename, mod2$filename)
   ) |>
  compare_with(
    get_parameters(file.path(model_dir, "run003")) |>
      apply_table_spec(spec, info3) |>
      add_summary_info(mod_sum3),
    labels = c(mod3$filename)
  ) |>
  compare_with(
    get_parameters(file.path(model_dir, "run003b1")) |>
      apply_table_spec(spec, info4) |>
      add_summary_info(mod_sum4),
    labels = c(mod4$filename)
  )
comp |> names()
#>  [1] "name"          "symbol_1"      "fixed_1"       "estimate_1"   
#>  [5] "symbol_2"      "fixed_2"       "estimate_2"    "symbol_3"     
#>  [9] "fixed_3"       "estimate_3"    "pct_change_2"  "pct_change"   
#> [13] "pct_change_3"  "symbol_4"      "fixed_4"       "estimate_4"   
#> [17] "kind"          "section"       "random_effect" "diagonal"     
#> [21] "pct_change_4"
comp |>
  make_comparison_table()
```

<div id="vwgfrwvccr" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#vwgfrwvccr table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#vwgfrwvccr thead, #vwgfrwvccr tbody, #vwgfrwvccr tfoot, #vwgfrwvccr tr, #vwgfrwvccr td, #vwgfrwvccr th {
  border-style: none;
}
&#10;#vwgfrwvccr p {
  margin: 0;
  padding: 0;
}
&#10;#vwgfrwvccr .gt_table {
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
&#10;#vwgfrwvccr .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#vwgfrwvccr .gt_title {
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
&#10;#vwgfrwvccr .gt_subtitle {
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
&#10;#vwgfrwvccr .gt_heading {
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
&#10;#vwgfrwvccr .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#vwgfrwvccr .gt_col_headings {
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
&#10;#vwgfrwvccr .gt_col_heading {
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
&#10;#vwgfrwvccr .gt_column_spanner_outer {
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
&#10;#vwgfrwvccr .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#vwgfrwvccr .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#vwgfrwvccr .gt_column_spanner {
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
&#10;#vwgfrwvccr .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#vwgfrwvccr .gt_group_heading {
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
&#10;#vwgfrwvccr .gt_empty_group_heading {
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
&#10;#vwgfrwvccr .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#vwgfrwvccr .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#vwgfrwvccr .gt_row {
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
&#10;#vwgfrwvccr .gt_stub {
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
&#10;#vwgfrwvccr .gt_stub_row_group {
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
&#10;#vwgfrwvccr .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#vwgfrwvccr .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#vwgfrwvccr .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#vwgfrwvccr .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#vwgfrwvccr .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#vwgfrwvccr .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#vwgfrwvccr .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#vwgfrwvccr .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#vwgfrwvccr .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#vwgfrwvccr .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#vwgfrwvccr .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#vwgfrwvccr .gt_footnotes {
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
&#10;#vwgfrwvccr .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#vwgfrwvccr .gt_sourcenotes {
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
&#10;#vwgfrwvccr .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#vwgfrwvccr .gt_left {
  text-align: left;
}
&#10;#vwgfrwvccr .gt_center {
  text-align: center;
}
&#10;#vwgfrwvccr .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#vwgfrwvccr .gt_font_normal {
  font-weight: normal;
}
&#10;#vwgfrwvccr .gt_font_bold {
  font-weight: bold;
}
&#10;#vwgfrwvccr .gt_font_italic {
  font-style: italic;
}
&#10;#vwgfrwvccr .gt_super {
  font-size: 65%;
}
&#10;#vwgfrwvccr .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#vwgfrwvccr .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#vwgfrwvccr .gt_indent_1 {
  text-indent: 5px;
}
&#10;#vwgfrwvccr .gt_indent_2 {
  text-indent: 10px;
}
&#10;#vwgfrwvccr .gt_indent_3 {
  text-indent: 15px;
}
&#10;#vwgfrwvccr .gt_indent_4 {
  text-indent: 20px;
}
&#10;#vwgfrwvccr .gt_indent_5 {
  text-indent: 25px;
}
&#10;#vwgfrwvccr .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#vwgfrwvccr div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
&#10;td, th {
  white-space: nowrap;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="13" class="gt_heading gt_title gt_font_normal gt_bottom_border" style>Structural Model Parameter Comparison</td>
    </tr>
    &#10;    <tr class="gt_col_headings gt_spanner_row">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="2" colspan="1" style="font-weight: bold;" scope="col" id="name">Parameter</th>
      <th class="gt_center gt_columns_top_border gt_column_spanner_outer" rowspan="1" colspan="3" style="font-weight: bold;" scope="colgroup" id="run001">
        <div class="gt_column_spanner">run001</div>
      </th>
      <th class="gt_center gt_columns_top_border gt_column_spanner_outer" rowspan="1" colspan="3" style="font-weight: bold;" scope="colgroup" id="run002">
        <div class="gt_column_spanner">run002</div>
      </th>
      <th class="gt_center gt_columns_top_border gt_column_spanner_outer" rowspan="1" colspan="3" style="font-weight: bold;" scope="colgroup" id="run003">
        <div class="gt_column_spanner">run003</div>
      </th>
      <th class="gt_center gt_columns_top_border gt_column_spanner_outer" rowspan="1" colspan="3" style="font-weight: bold;" scope="colgroup" id="run003b1">
        <div class="gt_column_spanner">run003b1</div>
      </th>
    </tr>
    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol_1">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="fixed_fmt_1">Fixed</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate_1">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol_2">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="fixed_fmt_2">Fixed</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate_2">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol_3">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="fixed_fmt_3">Fixed</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate_3">Estimate</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="symbol_4">Symbol</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="fixed_fmt_4">Fixed</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="estimate_4">Estimate</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_group_heading_row">
      <th colspan="13" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Structural model parameters">Structural model parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVCL</span></td>
<td headers="Structural model parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  fixed_fmt_1" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">1.24</td>
<td headers="Structural model parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  fixed_fmt_2" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">1.25</td>
<td headers="Structural model parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  fixed_fmt_3" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">1.33</td>
<td headers="Structural model parameters  symbol_4" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  fixed_fmt_4" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_4" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">1.25</td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVV</span></td>
<td headers="Structural model parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  fixed_fmt_1" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">40.9</td>
<td headers="Structural model parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  fixed_fmt_2" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">40.8</td>
<td headers="Structural model parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  fixed_fmt_3" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">40.2</td>
<td headers="Structural model parameters  symbol_4" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  fixed_fmt_4" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_4" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">40.3</td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>TVKA</span></td>
<td headers="Structural model parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  fixed_fmt_1" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">1.24</td>
<td headers="Structural model parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  fixed_fmt_2" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">1.24</td>
<td headers="Structural model parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  fixed_fmt_3" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">1.21</td>
<td headers="Structural model parameters  symbol_4" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>4</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{4}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">4</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  fixed_fmt_4" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_4" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">1.22</td></tr>
    <tr><td headers="Structural model parameters  name" class="gt_row gt_left"><span class='gt_from_md'>WT-on-CL</span></td>
<td headers="Structural model parameters  symbol_1" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  fixed_fmt_1" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Structural model parameters  symbol_2" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  fixed_fmt_2" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Structural model parameters  symbol_3" class="gt_row gt_left"><br /></td>
<td headers="Structural model parameters  fixed_fmt_3" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Structural model parameters  symbol_4" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>θ</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\theta_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Structural model parameters  fixed_fmt_4" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Structural model parameters  estimate_4" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.545</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="13" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual variance parameters">Interindividual variance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM1-TVCL</span></td>
<td headers="Interindividual variance parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  fixed_fmt_1" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Interindividual variance parameters  estimate_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.131</td>
<td headers="Interindividual variance parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  fixed_fmt_2" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Interindividual variance parameters  estimate_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.130</td>
<td headers="Interindividual variance parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  fixed_fmt_3" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Interindividual variance parameters  estimate_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.122</td>
<td headers="Interindividual variance parameters  symbol_4" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  fixed_fmt_4" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Interindividual variance parameters  estimate_4" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.123</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM2-TVV</span></td>
<td headers="Interindividual variance parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  fixed_fmt_1" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Interindividual variance parameters  estimate_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.136</td>
<td headers="Interindividual variance parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  fixed_fmt_2" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Interindividual variance parameters  estimate_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.136</td>
<td headers="Interindividual variance parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  fixed_fmt_3" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Interindividual variance parameters  estimate_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.124</td>
<td headers="Interindividual variance parameters  symbol_4" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  fixed_fmt_4" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Interindividual variance parameters  estimate_4" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.125</td></tr>
    <tr><td headers="Interindividual variance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM3-TVKA</span></td>
<td headers="Interindividual variance parameters  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  fixed_fmt_1" class="gt_row gt_left"><span class='gt_from_md'>Fixed</span></td>
<td headers="Interindividual variance parameters  estimate_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.100</td>
<td headers="Interindividual variance parameters  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  fixed_fmt_2" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Interindividual variance parameters  estimate_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.114</td>
<td headers="Interindividual variance parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  fixed_fmt_3" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Interindividual variance parameters  estimate_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.122</td>
<td headers="Interindividual variance parameters  symbol_4" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(3,3)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">3</span><span class="mpunct mtight">,</span><span class="mord mtight">3</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual variance parameters  fixed_fmt_4" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Interindividual variance parameters  estimate_4" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.124</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="13" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Interindividual covariance parameters">Interindividual covariance parameters</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Interindividual covariance parameters  name" class="gt_row gt_left"><span class='gt_from_md'>OM1,2-TVCL-TVV</span></td>
<td headers="Interindividual covariance parameters  symbol_1" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  fixed_fmt_1" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Interindividual covariance parameters  estimate_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Interindividual covariance parameters  symbol_2" class="gt_row gt_left"><br /></td>
<td headers="Interindividual covariance parameters  fixed_fmt_2" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Interindividual covariance parameters  estimate_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Interindividual covariance parameters  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  fixed_fmt_3" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Interindividual covariance parameters  estimate_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.0745</td>
<td headers="Interindividual covariance parameters  symbol_4" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Ω</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Omega_{(2,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Interindividual covariance parameters  fixed_fmt_4" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Interindividual covariance parameters  estimate_4" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.0722</td></tr>
    <tr class="gt_group_heading_row">
      <th colspan="13" class="gt_group_heading" style="font-weight: bold;" scope="colgroup" id="Residual error">Residual error</th>
    </tr>
    <tr class="gt_row_group_first"><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>SIGMA(1,1)</span></td>
<td headers="Residual error  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  fixed_fmt_1" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.0364</td>
<td headers="Residual error  symbol_2" class="gt_row gt_left"><br /></td>
<td headers="Residual error  fixed_fmt_2" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Residual error  symbol_3" class="gt_row gt_left"><br /></td>
<td headers="Residual error  fixed_fmt_3" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Residual error  symbol_4" class="gt_row gt_left"><br /></td>
<td headers="Residual error  fixed_fmt_4" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_4" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td></tr>
    <tr><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>SIGMA(2,2)</span></td>
<td headers="Residual error  symbol_1" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  fixed_fmt_1" class="gt_row gt_left"><span class='gt_from_md'>Fixed</span></td>
<td headers="Residual error  estimate_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.0100</td>
<td headers="Residual error  symbol_2" class="gt_row gt_left"><br /></td>
<td headers="Residual error  fixed_fmt_2" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Residual error  symbol_3" class="gt_row gt_left"><br /></td>
<td headers="Residual error  fixed_fmt_3" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Residual error  symbol_4" class="gt_row gt_left"><br /></td>
<td headers="Residual error  fixed_fmt_4" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_4" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td></tr>
    <tr><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>SIG1</span></td>
<td headers="Residual error  symbol_1" class="gt_row gt_left"><br /></td>
<td headers="Residual error  fixed_fmt_1" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Residual error  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  fixed_fmt_2" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.0372</td>
<td headers="Residual error  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  fixed_fmt_3" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.0375</td>
<td headers="Residual error  symbol_4" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(1,1)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">1</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  fixed_fmt_4" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_4" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.0374</td></tr>
    <tr><td headers="Residual error  name" class="gt_row gt_left"><span class='gt_from_md'>SIG2</span></td>
<td headers="Residual error  symbol_1" class="gt_row gt_left"><br /></td>
<td headers="Residual error  fixed_fmt_1" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_1" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;"><br /></td>
<td headers="Residual error  symbol_2" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  fixed_fmt_2" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_2" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.00661</td>
<td headers="Residual error  symbol_3" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  fixed_fmt_3" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_3" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.00527</td>
<td headers="Residual error  symbol_4" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msub></mrow><annotation encoding="application/x-tex">\Sigma_{(2,2)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mpunct mtight">,</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td headers="Residual error  fixed_fmt_4" class="gt_row gt_right"><span class='gt_from_md'></span></td>
<td headers="Residual error  estimate_4" class="gt_row gt_right" style="border-right-width: 1px; border-right-style: solid; border-right-color: #D3D3D3;">0.00589</td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="13"> Condition Number: 1.98 (run001), 29.6 (run002)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="13"> No. of Observations: 210 (run001), 210 (run002)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="13"> OFV: -103.299 (run001), -103.468 (run002)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="13"> Condition Number: 29.6 (run002), 6.17 (run003)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="13"> No. of Observations: 210 (run002), 210 (run003)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="13"> OFV: -103.468 (run002), -109.826 (run003)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="13"> Condition Number: 6.17 (run003), N/A (run003b1)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="13"> No. of Observations: 210 (run003), 210 (run003b1)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="13"> OFV: -109.826 (run003), -108.889 (run003b1)</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="13"> <span class='gt_from_md'>% Change: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><msub><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>−</mo><msub><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi></mrow></msub></mrow><msub><mrow><mi mathvariant="normal">E</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi></mrow></msub></mfrac><mo>⋅</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\frac{\mathrm{Estimate}_{\mathrm{model}} - \mathrm{Estimate}_{\mathrm{ref}}}{\mathrm{Estimate}_{\mathrm{ref}}} \cdot 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3451em;vertical-align:-0.4509em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8942em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight">Estimate</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight" style="margin-right:0.07778em;">ref</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.4159em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight">Estimate</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight">model</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span><span class="mbin mtight">−</span><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight">Estimate</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathrm mtight" style="margin-right:0.07778em;">ref</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4509em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></span></td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="13"> Abbreviations:</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="13"> OFV = Objective Function Value</td>
    </tr>
  </tfoot>
</table>
</div>

# Parameter Info Audit trail

Using just model comments the source is either model file, default, or
user supplied

``` r
info <- get_model_parameter_info(file.path(model_dir, model_run))
audit_parameter_info(info)
```

# Parameter Info Audit

## Theta Sources

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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

</tr>

</tbody>

</table>

## Omega Sources

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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,1)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,2)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(3,3)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

</tbody>

</table>

## Sigma Sources

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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
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

Editing a property by hand:

``` r
info@sigma$`SIGMA(1,1)`@display <- "Additive Error"
info@sigma$`SIGMA(1,1)`@parameterization <- "AddErr"

info@sigma$`SIGMA(2,2)`@display <- "Proportional Error"
info@sigma$`SIGMA(2,2)`@parameterization <- "Proportional"

audit_parameter_info(info)
```

# Parameter Info Audit

## Theta Sources

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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

</tr>

</tbody>

</table>

## Omega Sources

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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,1)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,2)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(3,3)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

</tbody>

</table>

## Sigma Sources

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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

user supplied
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

user supplied
</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(2,2)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

user supplied
</td>

<td style="text-align:left;">

default
</td>

<td style="text-align:left;">

user supplied
</td>

</tr>

</tbody>

</table>

Adding lookup values updates sources as well

``` r
info <- apply_lookup(info, normalizePath("../inst/lookup.toml"))

audit_parameter_info(info)
```

# Parameter Info Audit

## Theta Sources

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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

default
</td>

</tr>

</tbody>

</table>

## Omega Sources

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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,1)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(2,2)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

<tr>

<td style="text-align:left;">

OMEGA(3,3)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

</tr>

</tbody>

</table>

## Sigma Sources

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

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

user supplied
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

user supplied
</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(2,2)
</td>

<td style="text-align:left;">

../../../../../private/var/folders/bx/l0m1kftd7m93lvrc4m3_309c0000gn/T/RtmpEpA3dD/temp_libpath95e2443a0a9d/hyperion/extdata/models/onecmt/run003/run003.lst
</td>

<td style="text-align:left;">

user supplied
</td>

<td style="text-align:left;">

../inst/lookup.toml
</td>

<td style="text-align:left;">

user supplied
</td>

</tr>

</tbody>

</table>

``` r
info
```

# Model Parameter Info

## Theta Parameters

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

CL
</td>

<td style="text-align:left;">

Clearance
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

Vc
</td>

<td style="text-align:left;">

Central Volume
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

KA
</td>

<td style="text-align:left;">

Absorption Rate Constant
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

## Omega Parameters

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

OM1
</td>

<td style="text-align:left;">

IIV-CL
</td>

<td style="text-align:left;">

Interindividual variability on CL
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

OM1,2
</td>

<td style="text-align:left;">

IIV-CL-Vc
</td>

<td style="text-align:left;">

Interindividual covariance for CL-Vc
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

OM2
</td>

<td style="text-align:left;">

IIV-Vc
</td>

<td style="text-align:left;">

Interindividual variability on Vc
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

OM3
</td>

<td style="text-align:left;">

IIV-KA
</td>

<td style="text-align:left;">

Interindividual variability on KA
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

## Sigma Parameters

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

SIG1
</td>

<td style="text-align:left;">

Additive Error
</td>

<td style="text-align:left;">

Proportional Error
</td>

<td style="text-align:left;">

AddErr
</td>

</tr>

<tr>

<td style="text-align:left;">

SIGMA(2,2)
</td>

<td style="text-align:left;">

SIG2
</td>

<td style="text-align:left;">

Proportional Error
</td>

<td style="text-align:left;">

Additive Error
</td>

<td style="text-align:left;">

Proportional
</td>

</tr>

</tbody>

</table>

# Transformation Reference

The following table shows how CV, RSE, and CI are computed for each
transform and parameter type combination.

<div id="usaoqadvoh" style="padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>#usaoqadvoh table {
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
&#10;#usaoqadvoh thead, #usaoqadvoh tbody, #usaoqadvoh tfoot, #usaoqadvoh tr, #usaoqadvoh td, #usaoqadvoh th {
  border-style: none;
}
&#10;#usaoqadvoh p {
  margin: 0;
  padding: 0;
}
&#10;#usaoqadvoh .gt_table {
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
&#10;#usaoqadvoh .gt_caption {
  padding-top: 4px;
  padding-bottom: 4px;
}
&#10;#usaoqadvoh .gt_title {
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
&#10;#usaoqadvoh .gt_subtitle {
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
&#10;#usaoqadvoh .gt_heading {
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
&#10;#usaoqadvoh .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#usaoqadvoh .gt_col_headings {
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
&#10;#usaoqadvoh .gt_col_heading {
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
&#10;#usaoqadvoh .gt_column_spanner_outer {
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
&#10;#usaoqadvoh .gt_column_spanner_outer:first-child {
  padding-left: 0;
}
&#10;#usaoqadvoh .gt_column_spanner_outer:last-child {
  padding-right: 0;
}
&#10;#usaoqadvoh .gt_column_spanner {
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
&#10;#usaoqadvoh .gt_spanner_row {
  border-bottom-style: hidden;
}
&#10;#usaoqadvoh .gt_group_heading {
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
&#10;#usaoqadvoh .gt_empty_group_heading {
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
&#10;#usaoqadvoh .gt_from_md > :first-child {
  margin-top: 0;
}
&#10;#usaoqadvoh .gt_from_md > :last-child {
  margin-bottom: 0;
}
&#10;#usaoqadvoh .gt_row {
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
&#10;#usaoqadvoh .gt_stub {
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
&#10;#usaoqadvoh .gt_stub_row_group {
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
&#10;#usaoqadvoh .gt_row_group_first td {
  border-top-width: 2px;
}
&#10;#usaoqadvoh .gt_row_group_first th {
  border-top-width: 2px;
}
&#10;#usaoqadvoh .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#usaoqadvoh .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #D3D3D3;
}
&#10;#usaoqadvoh .gt_first_summary_row.thick {
  border-top-width: 2px;
}
&#10;#usaoqadvoh .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#usaoqadvoh .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#usaoqadvoh .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}
&#10;#usaoqadvoh .gt_last_grand_summary_row_top {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: double;
  border-bottom-width: 6px;
  border-bottom-color: #D3D3D3;
}
&#10;#usaoqadvoh .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}
&#10;#usaoqadvoh .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}
&#10;#usaoqadvoh .gt_footnotes {
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
&#10;#usaoqadvoh .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#usaoqadvoh .gt_sourcenotes {
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
&#10;#usaoqadvoh .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}
&#10;#usaoqadvoh .gt_left {
  text-align: left;
}
&#10;#usaoqadvoh .gt_center {
  text-align: center;
}
&#10;#usaoqadvoh .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
&#10;#usaoqadvoh .gt_font_normal {
  font-weight: normal;
}
&#10;#usaoqadvoh .gt_font_bold {
  font-weight: bold;
}
&#10;#usaoqadvoh .gt_font_italic {
  font-style: italic;
}
&#10;#usaoqadvoh .gt_super {
  font-size: 65%;
}
&#10;#usaoqadvoh .gt_footnote_marks {
  font-size: 75%;
  vertical-align: 0.4em;
  position: initial;
}
&#10;#usaoqadvoh .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}
&#10;#usaoqadvoh .gt_indent_1 {
  text-indent: 5px;
}
&#10;#usaoqadvoh .gt_indent_2 {
  text-indent: 10px;
}
&#10;#usaoqadvoh .gt_indent_3 {
  text-indent: 15px;
}
&#10;#usaoqadvoh .gt_indent_4 {
  text-indent: 20px;
}
&#10;#usaoqadvoh .gt_indent_5 {
  text-indent: 25px;
}
&#10;#usaoqadvoh .katex-display {
  display: inline-flex !important;
  margin-bottom: 0.75em !important;
}
&#10;#usaoqadvoh div.Reactable > div.rt-table > div.rt-thead > div.rt-tr.rt-tr-group-header > div.rt-th-group:after {
  height: 0px !important;
}
</style>
<table class="gt_table" data-quarto-disable-processing="false" data-quarto-bootstrap="false">
  <thead>
    <tr class="gt_heading">
      <td colspan="5" class="gt_heading gt_title gt_font_normal gt_bottom_border" style="font-weight: bold;">Transformation Formulas</td>
    </tr>
    &#10;    <tr class="gt_col_headings">
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" scope="col" id="a::stub"></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="parameter">Parameter</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="cv">CV</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="rse">RSE<span class="gt_footnote_marks" style="white-space:nowrap;font-style:italic;font-weight:normal;line-height:0;"><sup>1</sup></span></th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1" style="font-weight: bold;" scope="col" id="ci">CI<span class="gt_footnote_marks" style="white-space:nowrap;font-style:italic;font-weight:normal;line-height:0;"><sup>2</sup></span></th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr class="gt_row_group_first"><td headers="Identity stub_2_1 stub_1" rowspan="3" class="gt_row gt_left gt_stub_row_group" style="font-weight: bold;">Identity</td>
<td headers="Identity stub_2_1 parameter" class="gt_row gt_left"><span class='gt_from_md'>Theta</span></td>
<td headers="Identity stub_2_1 cv" class="gt_row gt_left"><span class='gt_from_md'>N/A</span></td>
<td headers="Identity stub_2_1 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Identity stub_2_1 ci" class="gt_row gt_left"><span class='gt_from_md'></span></td></tr>
    <tr><td headers="Identity stub_2_2 parameter" class="gt_row gt_left"><span class='gt_from_md'>Omega</span></td>
<td headers="Identity stub_2_2 cv" class="gt_row gt_left"><span class='gt_from_md'>N/A</span></td>
<td headers="Identity stub_2_2 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Identity stub_2_2 ci" class="gt_row gt_left"><span class='gt_from_md'></span></td></tr>
    <tr><td headers="Identity stub_2_3 parameter" class="gt_row gt_left"><span class='gt_from_md'>Sigma</span></td>
<td headers="Identity stub_2_3 cv" class="gt_row gt_left"><span class='gt_from_md'>N/A</span></td>
<td headers="Identity stub_2_3 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Identity stub_2_3 ci" class="gt_row gt_left"><span class='gt_from_md'></span></td></tr>
    <tr class="gt_row_group_first"><td headers="LogNormal stub_2_4 stub_1" rowspan="3" class="gt_row gt_left gt_stub_row_group" style="font-weight: bold;">LogNormal</td>
<td headers="LogNormal stub_2_4 parameter" class="gt_row gt_left"><span class='gt_from_md'>Theta</span></td>
<td headers="LogNormal stub_2_4 cv" class="gt_row gt_left"><span class='gt_from_md'>N/A</span></td>
<td headers="LogNormal stub_2_4 rse" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><msup><mtext>SE</mtext><mn>2</mn></msup><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\text{SE}^2) - 1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.84em;vertical-align:-0.5363em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3037em;"><span class="svg-align" style="top:-3.8em;"><span class="pstrut" style="height:3.8em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord text"><span class="mord">SE</span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8873em;"><span style="top:-3.1362em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-3.2637em;"><span class="pstrut" style="height:3.8em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.88em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.88em' viewBox='0 0 400000 1944' preserveAspectRatio='xMinYMin slice'><path d='M983 90
l0 -0
c4,-6.7,10,-10,18,-10 H400000v40
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.5363em;"><span></span></span></span></span></span></span></span></span></span></td>
<td headers="LogNormal stub_2_4 ci" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mtext>Est</mtext><mo>±</mo><mi>z</mi><mo>⋅</mo><mtext>SE</mtext><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\exp(\text{Est} \pm z \cdot \text{SE})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">exp</span><span class="mopen">(</span><span class="mord text"><span class="mord">Est</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">SE</span></span><span class="mclose">)</span></span></span></span></span></td></tr>
    <tr><td headers="LogNormal stub_2_5 parameter" class="gt_row gt_left"><span class='gt_from_md'>Omega</span></td>
<td headers="LogNormal stub_2_5 cv" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mtext>Est</mtext><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\text{Est}) - 1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord text"><span class="mord">Est</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span></span></span></span></span></td>
<td headers="LogNormal stub_2_5 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="LogNormal stub_2_5 ci" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mtext>Est</mtext><mo>±</mo><mi>z</mi><mo>⋅</mo><mtext>SE</mtext><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\exp(\text{Est} \pm z \cdot \text{SE})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">exp</span><span class="mopen">(</span><span class="mord text"><span class="mord">Est</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">SE</span></span><span class="mclose">)</span></span></span></span></span></td></tr>
    <tr><td headers="LogNormal stub_2_6 parameter" class="gt_row gt_left"><span class='gt_from_md'>Sigma</span></td>
<td headers="LogNormal stub_2_6 cv" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mtext>Est</mtext><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\text{Est}) - 1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord text"><span class="mord">Est</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span></span></span></span></span></td>
<td headers="LogNormal stub_2_6 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="LogNormal stub_2_6 ci" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mtext>Est</mtext><mo>±</mo><mi>z</mi><mo>⋅</mo><mtext>SE</mtext><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\exp(\text{Est} \pm z \cdot \text{SE})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">exp</span><span class="mopen">(</span><span class="mord text"><span class="mord">Est</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">±</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">SE</span></span><span class="mclose">)</span></span></span></span></span></td></tr>
    <tr class="gt_row_group_first"><td headers="Logit stub_2_7 stub_1" rowspan="3" class="gt_row gt_left gt_stub_row_group" style="font-weight: bold;">Logit</td>
<td headers="Logit stub_2_7 parameter" class="gt_row gt_left"><span class='gt_from_md'>Theta</span></td>
<td headers="Logit stub_2_7 cv" class="gt_row gt_left"><span class='gt_from_md'>N/A</span></td>
<td headers="Logit stub_2_7 rse" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mtext>BT</mtext><mo stretchy="false">)</mo><mo>⋅</mo><mtext>SE</mtext></mrow><annotation encoding="application/x-tex">(1 - \text{BT}) \cdot \text{SE}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">BT</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord">SE</span></span></span></span></span></span></td>
<td headers="Logit stub_2_7 ci" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mo>−</mo><mo stretchy="false">(</mo><mtext>Est</mtext><mo>±</mo><mi>z</mi><mo>⋅</mo><mtext>SE</mtext><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex">\frac{1}{1 + \exp(-(\text{Est} \pm z \cdot \text{SE}))}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3651em;vertical-align:-0.52em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mbin mtight">+</span><span class="mop mtight"><span class="mtight">e</span><span class="mtight">x</span><span class="mtight">p</span></span><span class="mopen mtight">(</span><span class="mord mtight">−</span><span class="mopen mtight">(</span><span class="mord text mtight"><span class="mord mtight">Est</span></span><span class="mbin mtight">±</span><span class="mord mathnormal mtight" style="margin-right:0.04398em;">z</span><span class="mbin mtight">⋅</span><span class="mord text mtight"><span class="mord mtight">SE</span></span><span class="mclose mtight">))</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></td></tr>
    <tr><td headers="Logit stub_2_8 parameter" class="gt_row gt_left"><span class='gt_from_md'>Omega</span></td>
<td headers="Logit stub_2_8 cv" class="gt_row gt_left"><span class='gt_from_md'>N/A</span></td>
<td headers="Logit stub_2_8 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Logit stub_2_8 ci" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mo>−</mo><mo stretchy="false">(</mo><mtext>Est</mtext><mo>±</mo><mi>z</mi><mo>⋅</mo><mtext>SE</mtext><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex">\frac{1}{1 + \exp(-(\text{Est} \pm z \cdot \text{SE}))}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3651em;vertical-align:-0.52em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mbin mtight">+</span><span class="mop mtight"><span class="mtight">e</span><span class="mtight">x</span><span class="mtight">p</span></span><span class="mopen mtight">(</span><span class="mord mtight">−</span><span class="mopen mtight">(</span><span class="mord text mtight"><span class="mord mtight">Est</span></span><span class="mbin mtight">±</span><span class="mord mathnormal mtight" style="margin-right:0.04398em;">z</span><span class="mbin mtight">⋅</span><span class="mord text mtight"><span class="mord mtight">SE</span></span><span class="mclose mtight">))</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></td></tr>
    <tr><td headers="Logit stub_2_9 parameter" class="gt_row gt_left"><span class='gt_from_md'>Sigma</span></td>
<td headers="Logit stub_2_9 cv" class="gt_row gt_left"><span class='gt_from_md'>N/A</span></td>
<td headers="Logit stub_2_9 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Logit stub_2_9 ci" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mo>−</mo><mo stretchy="false">(</mo><mtext>Est</mtext><mo>±</mo><mi>z</mi><mo>⋅</mo><mtext>SE</mtext><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex">\frac{1}{1 + \exp(-(\text{Est} \pm z \cdot \text{SE}))}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3651em;vertical-align:-0.52em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mbin mtight">+</span><span class="mop mtight"><span class="mtight">e</span><span class="mtight">x</span><span class="mtight">p</span></span><span class="mopen mtight">(</span><span class="mord mtight">−</span><span class="mopen mtight">(</span><span class="mord text mtight"><span class="mord mtight">Est</span></span><span class="mbin mtight">±</span><span class="mord mathnormal mtight" style="margin-right:0.04398em;">z</span><span class="mbin mtight">⋅</span><span class="mord text mtight"><span class="mord mtight">SE</span></span><span class="mclose mtight">))</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></td></tr>
    <tr class="gt_row_group_first"><td headers="Proportional stub_2_10 stub_1" rowspan="3" class="gt_row gt_left gt_stub_row_group" style="font-weight: bold;">Proportional</td>
<td headers="Proportional stub_2_10 parameter" class="gt_row gt_left"><span class='gt_from_md'>Theta</span></td>
<td headers="Proportional stub_2_10 cv" class="gt_row gt_left"><span class='gt_from_md'>N/A</span></td>
<td headers="Proportional stub_2_10 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Proportional stub_2_10 ci" class="gt_row gt_left"><span class='gt_from_md'></span></td></tr>
    <tr><td headers="Proportional stub_2_11 parameter" class="gt_row gt_left"><span class='gt_from_md'>Omega</span></td>
<td headers="Proportional stub_2_11 cv" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mtext>Est</mtext></msqrt></mrow><annotation encoding="application/x-tex">\sqrt{\text{Est}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord text"><span class="mord">Est</span></span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span></span></span></span></span></td>
<td headers="Proportional stub_2_11 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Proportional stub_2_11 ci" class="gt_row gt_left"><span class='gt_from_md'></span></td></tr>
    <tr><td headers="Proportional stub_2_12 parameter" class="gt_row gt_left"><span class='gt_from_md'>Sigma</span></td>
<td headers="Proportional stub_2_12 cv" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mtext>Est</mtext></msqrt></mrow><annotation encoding="application/x-tex">\sqrt{\text{Est}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord text"><span class="mord">Est</span></span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span></span></span></span></span></td>
<td headers="Proportional stub_2_12 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="Proportional stub_2_12 ci" class="gt_row gt_left"><span class='gt_from_md'></span></td></tr>
    <tr class="gt_row_group_first"><td headers="AddErr stub_2_13 stub_1" rowspan="3" class="gt_row gt_left gt_stub_row_group" style="font-weight: bold;">AddErr</td>
<td headers="AddErr stub_2_13 parameter" class="gt_row gt_left"><span class='gt_from_md'>Theta</span></td>
<td headers="AddErr stub_2_13 cv" class="gt_row gt_left"><span class='gt_from_md'>N/A</span></td>
<td headers="AddErr stub_2_13 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="AddErr stub_2_13 ci" class="gt_row gt_left"><span class='gt_from_md'></span></td></tr>
    <tr><td headers="AddErr stub_2_14 parameter" class="gt_row gt_left"><span class='gt_from_md'>Omega</span></td>
<td headers="AddErr stub_2_14 cv" class="gt_row gt_left"><span class='gt_from_md'>N/A</span></td>
<td headers="AddErr stub_2_14 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="AddErr stub_2_14 ci" class="gt_row gt_left"><span class='gt_from_md'></span></td></tr>
    <tr><td headers="AddErr stub_2_15 parameter" class="gt_row gt_left"><span class='gt_from_md'>Sigma</span></td>
<td headers="AddErr stub_2_15 cv" class="gt_row gt_left"><span class='gt_from_md'>N/A</span></td>
<td headers="AddErr stub_2_15 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="AddErr stub_2_15 ci" class="gt_row gt_left"><span class='gt_from_md'></span></td></tr>
    <tr class="gt_row_group_first"><td headers="LogAddErr stub_2_16 stub_1" rowspan="3" class="gt_row gt_left gt_stub_row_group" style="font-weight: bold;">LogAddErr</td>
<td headers="LogAddErr stub_2_16 parameter" class="gt_row gt_left"><span class='gt_from_md'>Theta</span></td>
<td headers="LogAddErr stub_2_16 cv" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><msup><mtext>Est</mtext><mn>2</mn></msup><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\text{Est}^2) - 1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.84em;vertical-align:-0.5363em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3037em;"><span class="svg-align" style="top:-3.8em;"><span class="pstrut" style="height:3.8em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord"><span class="mord text"><span class="mord">Est</span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8873em;"><span style="top:-3.1362em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-3.2637em;"><span class="pstrut" style="height:3.8em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.88em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.88em' viewBox='0 0 400000 1944' preserveAspectRatio='xMinYMin slice'><path d='M983 90
l0 -0
c4,-6.7,10,-10,18,-10 H400000v40
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.5363em;"><span></span></span></span></span></span></span></span></span></span></td>
<td headers="LogAddErr stub_2_16 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="LogAddErr stub_2_16 ci" class="gt_row gt_left"><span class='gt_from_md'></span></td></tr>
    <tr><td headers="LogAddErr stub_2_17 parameter" class="gt_row gt_left"><span class='gt_from_md'>Omega</span></td>
<td headers="LogAddErr stub_2_17 cv" class="gt_row gt_left"><span class='gt_from_md'>N/A</span></td>
<td headers="LogAddErr stub_2_17 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="LogAddErr stub_2_17 ci" class="gt_row gt_left"><span class='gt_from_md'></span></td></tr>
    <tr><td headers="LogAddErr stub_2_18 parameter" class="gt_row gt_left"><span class='gt_from_md'>Sigma</span></td>
<td headers="LogAddErr stub_2_18 cv" class="gt_row gt_left"><span class='gt_from_md'><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" data-external="1">
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>exp</mi><mo>⁡</mo><mo stretchy="false">(</mo><mtext>Est</mtext><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></msqrt></mrow><annotation encoding="application/x-tex">\sqrt{\exp(\text{Est}) - 1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mop">exp</span><span class="mopen">(</span><span class="mord text"><span class="mord">Est</span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span></span></span></span></span></td>
<td headers="LogAddErr stub_2_18 rse" class="gt_row gt_left"><span class='gt_from_md'></span></td>
<td headers="LogAddErr stub_2_18 ci" class="gt_row gt_left"><span class='gt_from_md'></span></td></tr>
  </tbody>
  <tfoot>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="5"> Est = THETA(x)/OMEGA(i,j)/SIGMA(i,j) reported in the .ext file</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="5"> BT = back-transformed estimate = 1/(1 + exp(-Est))</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="5"> SE = Standard Error, z = z-score for CI level</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="5"> CV and RSE formulas are multiplied by 100 to express as percentages</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="5"><span class="gt_footnote_marks" style="white-space:nowrap;font-style:italic;font-weight:normal;line-height:0;"><sup>1</sup></span> SE/|Est| unless otherwise noted</td>
    </tr>
    <tr class="gt_footnotes">
      <td class="gt_footnote" colspan="5"><span class="gt_footnote_marks" style="white-space:nowrap;font-style:italic;font-weight:normal;line-height:0;"><sup>2</sup></span> Est ± z·SE unless otherwise noted</td>
    </tr>
  </tfoot>
</table>
</div>
