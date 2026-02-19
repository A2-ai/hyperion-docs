// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { remarkBaseUrl } from "./remark-base-url.mjs";
import { starlightKatex } from "starlight-katex";

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || "http://localhost",
  base: process.env.ASTRO_BASE || "/",
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [remarkBaseUrl],
  },
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
          collapsed: true,
          items: [
            { label: "Welcome", slug: "articles/readme" }
          ]
        },
        {
          label: "Output File Parsing",
          collapsed: true,
          items: [
            { label: "ext", slug: "articles/ext" },
            { label: "grd", slug: "articles/grd" },
            { label: "shk", slug: "articles/shk" },
            { label: "lst", slug: "articles/lst" }
          ]
        },
        {
          label: "NONMEM Model Interactions",
          collapsed: true,
          items: [
            { label: "hyperion_model", slug: "articles/hyperion_model" }
          ]
        }
      ]
    },
    {
      label: "Reference",
      items: [
        { label: "hyperion-package", slug: "reference/hyperion-package" },
        {
          label: "Model I/O",
          collapsed: true,
          items: [
            { label: "read_model", slug: "reference/read_model" },
            { label: "copy_model", slug: "reference/copy_model" },
            { label: "check_model", slug: "reference/check_model" },
            { label: "check_dataset", slug: "reference/check_dataset" },
            { label: "get_model_name", slug: "reference/get_model_name" },
            { label: "get_model_dir", slug: "reference/get_model_dir" },
            { label: "get_data_path", slug: "reference/get_data_path" },
            { label: "from_config_relative", slug: "reference/from_config_relative" }
          ]
        },
        {
          label: "Model Summaries",
          collapsed: true,
          items: [
            { label: "summary.hyperion_nonmem_model", slug: "reference/summary-hyperion_nonmem_model" },
            { label: "get_run_info", slug: "reference/get_run_info" }
          ]
        },
        {
          label: "Parameter Extraction",
          collapsed: true,
          items: [
            { label: "get_parameters", slug: "reference/get_parameters" },
            { label: "get_final_estimates", slug: "reference/get_final_estimates" },
            { label: "read_ext_file", slug: "reference/read_ext_file" },
            { label: "get_gradients", slug: "reference/get_gradients" },
            { label: "get_eta_shrinkage", slug: "reference/get_eta_shrinkage" },
            { label: "get_eps_shrinkage", slug: "reference/get_eps_shrinkage" }
          ]
        },
        {
          label: "Parameter Information",
          collapsed: true,
          items: [
            { label: "get_model_parameter_info", slug: "reference/get_model_parameter_info" },
            { label: "ThetaComment", slug: "reference/thetacomment" },
            { label: "OmegaComment", slug: "reference/omegacomment" },
            { label: "SigmaComment", slug: "reference/sigmacomment" },
            { label: "ModelComments", slug: "reference/modelcomments" },
            { label: "get_comment", slug: "reference/get_comment" },
            { label: "get_parameter_names", slug: "reference/get_parameter_names" },
            { label: "get_parameter_transform", slug: "reference/get_parameter_transform" },
            { label: "get_parameter_unit", slug: "reference/get_parameter_unit" },
            { label: "get_theta_names", slug: "reference/get_theta_names" },
            { label: "get_eta_labels", slug: "reference/get_eta_labels" },
            { label: "update_param_info", slug: "reference/update_param_info" },
            { label: "audit_parameter_info", slug: "reference/audit_parameter_info" }
          ]
        },
        {
          label: "Lookup Files",
          collapsed: true,
          items: [
            { label: "apply_lookup", slug: "reference/apply_lookup" },
            { label: "apply_lookup_defaults", slug: "reference/apply_lookup_defaults" },
            { label: "add_parameter_to_lookup", slug: "reference/add_parameter_to_lookup" },
            { label: "remove_parameter_from_lookup", slug: "reference/remove_parameter_from_lookup" },
            { label: "list_lookup_parameters", slug: "reference/list_lookup_parameters" }
          ]
        },
        {
          label: "Transform Calculations",
          collapsed: true,
          items: [
            { label: "compute_cv", slug: "reference/compute_cv" },
            { label: "compute_rse", slug: "reference/compute_rse" },
            { label: "compute_ci", slug: "reference/compute_ci" },
            { label: "transform_value", slug: "reference/transform_value" }
          ]
        },
        {
          label: "Model Lineage",
          collapsed: true,
          items: [
            { label: "get_model_lineage", slug: "reference/get_model_lineage" },
            { label: "get_model_ancestors", slug: "reference/get_model_ancestors" },
            { label: "get_model_descendants", slug: "reference/get_model_descendants" },
            { label: "are_models_in_lineage", slug: "reference/are_models_in_lineage" }
          ]
        },
        {
          label: "Configuration",
          collapsed: true,
          items: [
            { label: "init", slug: "reference/init" },
            { label: "get_pharos_config", slug: "reference/get_pharos_config" },
            { label: "get_comment_type", slug: "reference/get_comment_type" },
            { label: "use_type1_comments", slug: "reference/use_type1_comments" }
          ]
        },
        {
          label: "Metadata Files",
          collapsed: true,
          items: [
            { label: "set_metadata_file", slug: "reference/set_metadata_file" },
            { label: "update_metadata_file", slug: "reference/update_metadata_file" },
            { label: "get_model_metadata", slug: "reference/get_model_metadata" }
          ]
        },
        {
          label: "Job Submission",
          collapsed: true,
          items: [
            { label: "submit_model_to_slurm", slug: "reference/submit_model_to_slurm" },
            { label: "submit_model_to_sge", slug: "reference/submit_model_to_sge" }
          ]
        }
      ]
    }
  ]
    })
  ]
});

