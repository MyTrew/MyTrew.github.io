terraform {
    required_providers {
        docker = {
            source = "this_site_image"
            version = "1.12.2"
        }
    }
}

provider "docker" {}

resource "this_site_image" "github" {
    name = "this_site_image:latest"
    keep_locally = true
}

resource "this_site_image", "github" {
    image = this_site_image
    ports {
        internal = 80
        external = 8000
    }

}