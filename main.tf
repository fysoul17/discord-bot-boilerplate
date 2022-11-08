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

# module "gce-container" {
#   # https://github.com/terraform-google-modules/terraform-google-container-vm
#   source  = "terraform-google-modules/container-vm/google"
#   version = "3.1.0"

#   container = {
#     image = <PUT YOUR DOCKER IMAGE LOCATION>
#     env = [
#     { name  = "NODE_ENV"
#         value = "production"
#     }
#     # BOT_TOKEN: TBA in console.
#     ],
#     securityContext = {
#     privileged : true
#     }
#     tty : false
# }

# restart_policy = "Always"
# }

# resource "google_compute_instance" "bot-server" {
#   depends_on   = [google_storage_bucket.terraform_state]
#   name         = <PUT YOUR DESIRED COMPUTE ENGINE NAME>
#   machine_type = "e2-small"
# metadata = {
#     gce-container-declaration = module.gce-container.metadata_value
#     google-logging-enabled    = "true"
# }
#   boot_disk {
#     initialize_params {
#       image = "cos-cloud/cos-stable"
#       size  = "10"
#       type  = "pd-ssd"
#     }
#   }

#   network_interface {
#     network = "default"
#   }
# }
