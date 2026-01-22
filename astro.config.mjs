// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { starlightKatex } from "starlight-katex";

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || "http://localhost",
  base: process.env.ASTRO_BASE || "/",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "hyperion",
      customCss: ["./src/styles/custom.css"],
      plugins: [starlightKatex()],
      components: { SiteTitle: "./src/components/VersionSelect.astro" },
      
      
      
      sidebar: [
    {
      label: "Articles",
      items: [
        {
          label: "Getting Started",
          items: [
            { label: "Welcome", slug: "articles/readme" }
          ]
        },
        {
          label: "Output File Parsing",
          items: [
            { label: "ext", slug: "articles/ext" },
            { label: "grd", slug: "articles/grd" },
            { label: "shk", slug: "articles/shk" },
            { label: "lst", slug: "articles/lst" }
          ]
        },
        {
          label: "NONMEM Model Interactions",
          items: [
            { label: "hyperion_model", slug: "articles/hyperion_model" }
          ]
        },
        {
          label: "Parameter Tables",
          items: [
            { label: "parameter-tables", slug: "articles/parameter-tables" }
          ]
        }
      ]
    },
    {
      label: "Reference",
      items: [
        {
          label: "Models",
          items: [
            { label: "read_model", slug: "reference/read_model" },
            { label: "check_model", slug: "reference/check_model" },
            { label: "check_dataset", slug: "reference/check_dataset" },
            { label: "copy_model", slug: "reference/copy_model" },
            { label: "get_model_summary", slug: "reference/get_model_summary" },
            { label: "get_run_info", slug: "reference/get_run_info" },
            { label: "get_parameters", slug: "reference/get_parameters" },
            { label: "get_model_parameter_info", slug: "reference/get_model_parameter_info" },
            { label: "get_parameter_names", slug: "reference/get_parameter_names" },
            { label: "get_model_lineage", slug: "reference/get_model_lineage" },
            { label: "are_models_in_lineage", slug: "reference/are_models_in_lineage" },
            { label: "get_model_ancestors", slug: "reference/get_model_ancestors" },
            { label: "get_model_descendants", slug: "reference/get_model_descendants" },
            { label: "read_model_from_lst", slug: "reference/read_model_from_lst" }
          ]
        },
        {
          label: "Model Metadata",
          items: [
            { label: "set_metadata_file", slug: "reference/set_metadata_file" },
            { label: "update_metadata_file", slug: "reference/update_metadata_file" }
          ]
        },
        {
          label: "Parameter Computations",
          items: [
            { label: "compute_ci", slug: "reference/compute_ci" },
            { label: "compute_cv", slug: "reference/compute_cv" },
            { label: "compute_rse", slug: "reference/compute_rse" },
            { label: "transform_value", slug: "reference/transform_value" }
          ]
        },
        {
          label: "Parameter Tables",
          items: [
            { label: "Tablespec", slug: "reference/tablespec" },
            { label: "apply_table_spec", slug: "reference/apply_table_spec" },
            { label: "get_table_spec", slug: "reference/get_table_spec" },
            { label: "add_summary_info", slug: "reference/add_summary_info" },
            { label: "make_parameter_table", slug: "reference/make_parameter_table" },
            { label: "compare_with", slug: "reference/compare_with" },
            { label: "make_comparison_table", slug: "reference/make_comparison_table" },
            { label: "add_model_lineage", slug: "reference/add_model_lineage" },
            { label: "filter_rules", slug: "reference/filter_rules" },
            { label: "section_rules", slug: "reference/section_rules" }
          ]
        },
        {
          label: "Model Lineage Tables",
          items: [
            { label: "SummarySpec", slug: "reference/summaryspec" },
            { label: "apply_summary_spec", slug: "reference/apply_summary_spec" },
            { label: "get_summary_spec", slug: "reference/get_summary_spec" },
            { label: "make_summary_table", slug: "reference/make_summary_table" },
            { label: "summary_filter_rules", slug: "reference/summary_filter_rules" }
          ]
        },
        {
          label: "Output Files",
          items: [
            { label: "get_eta_shrinkage", slug: "reference/get_eta_shrinkage" },
            { label: "get_eps_shrinkage", slug: "reference/get_eps_shrinkage" },
            { label: "get_gradients", slug: "reference/get_gradients" },
            { label: "get_final_estimates", slug: "reference/get_final_estimates" },
            { label: "read_ext_file", slug: "reference/read_ext_file" }
          ]
        },
        {
          label: "Comment Parsing",
          items: [
            { label: "ThetaComment", slug: "reference/thetacomment" },
            { label: "get_theta_names", slug: "reference/get_theta_names" },
            { label: "OmegaComment", slug: "reference/omegacomment" },
            { label: "get_eta_labels", slug: "reference/get_eta_labels" },
            { label: "SigmaComment", slug: "reference/sigmacomment" },
            { label: "ModelComments", slug: "reference/modelcomments" },
            { label: "get_model_parameter_names", slug: "reference/get_model_parameter_names" },
            { label: "get_comment", slug: "reference/get_comment" },
            { label: "get_comment_type", slug: "reference/get_comment_type" },
            { label: "audit_parameter_info", slug: "reference/audit_parameter_info" },
            { label: "get_parameter_transform", slug: "reference/get_parameter_transform" },
            { label: "get_parameter_unit", slug: "reference/get_parameter_unit" }
          ]
        },
        {
          label: "Lookup & Rules",
          items: [
            { label: "apply_lookup", slug: "reference/apply_lookup" },
            { label: "apply_lookup_defaults", slug: "reference/apply_lookup_defaults" },
            { label: "add_parameter_to_lookup", slug: "reference/add_parameter_to_lookup" },
            { label: "remove_parameter_from_lookup", slug: "reference/remove_parameter_from_lookup" },
            { label: "list_lookup_parameters", slug: "reference/list_lookup_parameters" }
          ]
        },
        {
          label: "Configuration & Submission",
          items: [
            { label: "init", slug: "reference/init" },
            { label: "get_pharos_config", slug: "reference/get_pharos_config" },
            { label: "submit_model_to_sge", slug: "reference/submit_model_to_sge" },
            { label: "submit_model_to_slurm", slug: "reference/submit_model_to_slurm" }
          ]
        }
      ]
    }
  ]
    })
  ]
});

