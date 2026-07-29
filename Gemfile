source "https://rubygems.org"

# GitHub Pages builds this site with its own pinned gem set. Installing the
# github-pages metagem locally keeps `bundle exec jekyll serve` on the same
# versions GitHub will use:
#
#     bundle install
#     bundle exec jekyll serve
#
# jekyll-feed, jekyll-sitemap, jekyll-gist, jekyll-paginate and
# jekyll-redirect-from (all listed under `plugins:` in _config.yml) already ship
# inside github-pages, so re-declaring them here only risks version conflicts.

gem "github-pages", group: :jekyll_plugins

gem "wdm", "~> 0.1.0" if Gem.win_platform?
