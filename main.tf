# terraform {
#   backend "gcs" {
#     bucket = <PUT YOUR DESIRED BUCKET NAME>
#     prefix = <PUT YOUR DESIRED FOLDER NAME IN BUCKET>
#   }
# }

# provider "google" {
#   project = <PUT YOUR GCP PROJECT ID>
#   region  = <PUT YOUR GCP REGION>
#   zone    = <PUT YOUR GCP ZONE>
# }

# # Chicken or the Egg.. This must be performed before terraform backend. The simplest way is to create this manually.
# # resource "google_storage_bucket" "terraform_state" {
# #   name     = <PUT YOUR DESIRED BUCKET NAME>
# #   location = <PUT YOUR DESIRED BUCKET LOCATION (REGION)>

# #   versioning = {
# #     enabled = "true"
# #   }
# # }

# resource "google_compute_instance" "bot-server" {
#   depends_on   = [google_storage_bucket.terraform_state]
#   name         = <PUT YOUR DESIRED COMPUTE ENGINE NAME>
#   machine_type = "e2-small"

#   boot_disk {
#     initialize_params {
#       image = "ubuntu-os-cloud/ubuntu-minimal-1804-lts"
#       size  = "10"
#       type  = "pd-ssd"
#     }
#   }

#   network_interface {
#     network = "default"
#   }
# }
