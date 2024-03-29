# main.tf

# 1. Create a `main.tf` file in the root of this repository with the `remote` backend and one or more resources defined.
#   Example `main.tf`:
#     # The configuration for the `remote` backend.
     terraform {
       backend "MyTrew.github.io" {
#         # The name of your Terraform Cloud organization.
        organization = "MyTrew"

#         # The name of the Terraform Cloud workspace to store Terraform state files in.
         workspaces {
           name = "this_site_workspace"
         }
       }
    }

#     # An example resource that does nothing.
    resource "null_resource" "example" {
       triggers = {
         value = "A example resource that does nothing!"
       }
     }
     