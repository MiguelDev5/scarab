# Scarab
### Introduction
Scarab is an open source web application designed for efficient release management, integrating with GitHub to automatically retrieve and process release data. 

Here are some of the features that Scarab provides out-of-the-box:
- [GitHub API Integration](#github-api-integration)
- [Data Visualization](#data-visualization)
- [Comparative Analysis](#comparative-analysis)
- [Export Functionality](#export-functionality)

### GitHub API Integration

Scarab leverages the GitHub API to establish a direct connection with repositories. This enables automated data retrieval, eliminating the need for manual updates.

### Data Visualization

Scarab employs a variety of visualization techniques, including charts and timelines, to transform raw data into meaningful insights. Data visualization libraries compatible with modern web technologies are utilized.

### Comparative Analysis

Scarab enables users to compare two different releases. This involves analyzing differences between versions and presenting them in an intelligible manner.

### Export Functionality

Users can export visualized data and comparison results in various formats, enhancing collaboration.


## Deploy Your Own

> Note: one-click deployment is a bit broken at the moment – you'll need to change some of the hard-coded values in the codebase to get it working. We're working on fixing this.

You can deploy your own hosted version of Scarab for greater privacy & control. Just click the link below to deploy a ready-to-go version of Dub to Vercel.

[![Deploy with Vercel](https://vercel.com/button)]()

## Built Using

- [Next.js](https://nextjs.org/) – Framework
- [Typescript](https://www.typescriptlang.org/) – Language
- [Tailwind](https://tailwindcss.com/) – CSS
- [Kinde Auth](https://kinde.com/) – Auth
- [Vercel](https://vercel.com/) – Hosting


## Implementation

Scarab is built as a standard Next.js application with [Middleware](https://nextjs.org/docs/advanced-features/middleware) to handle multi-tenancy, inspired by [the Vercel Platforms Starter Kit](https://github.com/vercel/platforms).

## Author

- Kelvin Yelyen ([@kelvinyelyen](https://twitter.com/kelvinyelyen))
