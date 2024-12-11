#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check for Ruby
if ! command_exists ruby; then
    echo "Ruby is not installed. Please install Ruby and try again."
    exit 1
fi

# Check for Bundler
if ! gem list bundler -i >/dev/null 2>&1; then
    echo "Bundler is not installed. Installing Bundler..."
    gem install bundler || {
        echo "Failed to install Bundler. Please check your Ruby setup."
        exit 1
    }
fi

# Check for Jekyll
if ! gem list jekyll -i >/dev/null 2>&1; then
    echo "Jekyll is not installed. Installing Jekyll..."
    gem install jekyll || {
        echo "Failed to install Jekyll. Please check your Ruby setup."
        exit 1
    }
fi

# Install project dependencies
if [ -f "Gemfile" ]; then
    echo "Installing dependencies from Gemfile..."
    bundle install || {
        echo "Failed to install dependencies. Check your Gemfile and environment."
        exit 1
    }
else
    echo "No Gemfile found. Skipping dependency installation."
fi

# Run Jekyll serve
echo "Starting Jekyll server..."
bundle exec jekyll serve