# helm-repo

A GitHub Action for running adding Helm repositories.

## Usage

To use the GitHub Action, add the following to your job:

```yaml
- uses: conventional-actions/helm-repo@v1
  with:
    name: my-repo
    url: https://my-org.jfrog.io/artifactory/my-repo/
    username: ${{ secrets.MY_ARTIFACTORY_USERNAME }}
    password: ${{ secrets.MY_ARTIFACTORY_PASSWORD }}
```

### Inputs

| Name       | Default | Description                                                |
|------------|---------|------------------------------------------------------------|
| `name`     | N/A     | the name of the repository to add                          |
| `url`      | N/A     | the URL of the repository to add                           |
| `username` | N/A     | the username of the user to authenticate to the repository |
| `password` | N/A     | the password of the user to authenticate to the repository |

### Outputs

No outputs

### Environment Variables

| Name            | Equivalent Input |
|-----------------|------------------|
| `REPO_NAME`     | `name`           |
| `REPO_URL`      | `url`            |
| `REPO_USERNAME` | `username`       | 
| `REPO_PASSWORD` | `password`       |

### Example with inputs

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - id: repo
        uses: conventional-actions/helm-repo@v1
        with:
          name: my-repo
          url: https://my-org.jfrog.io/artifactory/my-repo/
          username: ${{ secrets.MY_ARTIFACTORY_USERNAME }}
          password: ${{ secrets.MY_ARTIFACTORY_PASSWORD }}
```

### Example with environment variables

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - id: repo
        uses: conventional-actions/helm-repo@v1
        env:
          REPO_NAME: my-repo
          REPO_URL: https://my-org.jfrog.io/artifactory/my-repo/
          REPO_USERNAME: ${{ secrets.MY_ARTIFACTORY_USERNAME }}
          REPO_PASSWORD: ${{ secrets.MY_ARTIFACTORY_PASSWORD }}
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE).

