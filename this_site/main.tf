#main.tf

name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.3
        with:
          branch: gh-pages
          folder: /Users/a1/Desktop/Coding/React/html_site/MyTrew.github.io/this_site
          personal_token: ${{ secrets.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}}

resource "github_actions_deploy" "terraform" {
  repository = "MyTrew/MyTrew.github.io"
  workflow_id = "terraform.yml"
}
