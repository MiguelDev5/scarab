# Scarab
### Introduction
Scarab comprehensive changelog management tool for software development teams. Effortlessly track detailed version history, commit messages, and technical changes. Seamlessly integrates with Git for automated updates. Simplify version control and enhance team collaboration.

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

Scarab enables users to compare two different logs. This involves analyzing differences between versions and presenting them in an intelligible manner.

### Export Functionality

Users can export visualized data and comparison results in various formats, enhancing collaboration.


## Deploy Your Own

> Note: one-click deployment is a bit broken at the moment – you'll need to change some of the hard-coded values in the codebase to get it working. We're working on fixing this.

You can deploy your own hosted version of Scarab for greater privacy & control. Just click the link below to deploy a ready-to-go version of Dub to Vercel.

[![Deploy with Vercel](https://vercel.com/button)]()

## Built Using
- [Next.js](https://nextjs.org/): Powers the interactive user interface for managing logs.
- [Typescript](https://www.typescriptlang.org/): Provides strong typing and code consistency for maintainability.
- [Tailwind CSS](https://tailwindcss.com/): Streamlines UI development for a clean and responsive interface.
- [Kinde Auth](https://kinde.com/): Manages user authentication and secures release note content.
- [Vercel](https://vercel.com/): Hosts and deploys Scarab for seamless accessibility.


## Implementation

Scarab is built as a standard Next.js application with [Middleware](https://nextjs.org/docs/advanced-features/middleware) to handle multi-tenancy, inspired by [the Vercel Platforms Starter Kit](https://github.com/vercel/platforms).

## Author

- Kelvin Yelyen ([@kelvinyelyen](https://twitter.com/kelvinyelyen))
