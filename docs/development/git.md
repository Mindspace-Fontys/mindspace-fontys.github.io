---
sidebar_position: 10
---

# Version Control

For our version control system, we use Git. Git is a distributed version control system that allows us to track changes to the codebase. It also allows us to collaborate with other developers on the project. For more information about Git, please visit the [Git Website](https://git-scm.com/).

## Commit Structure

Before we get into the workflow, we need to understand the structure of a commit.
Each commit should follow the following structure:

```
<type>(<scope>): (<issue>)<subject>
```

- **type** The type of change that you are making. This can be one of the following:

  - **feat**: A new feature
  - **fix**: A bug fix
  - **refactor**: A change to the codebase that does not change the functionality of the project
  - **docs**: A change to the documentation
  - **style**: A change to the code style
  - **test**: A change to the tests
  - **chore**: A change that does not affect the codebase, such as updating the tooling

- **scope** The scope of the change (if applicable, scope is optional). This can be one of the following:

  - **client**: A change to the client
  - **server**: A change to the server
  - **docs**: A change to the documentation
  - **tooling**: A change to the tooling

- **issue** The issue number (if applicable, issue is optional). This is the issue number that the commit is related to.

- **subject** The subject of the commit. This should be a short description of the change.

## Workflow

Workflow is dependant on the type of change you are making. There are three types of changes:

- **Feature**: A feature is a new feature or change to the codebase. This could be a new feature, a bug fix, or a change to the design of the project.

- **Refactor**: A refactor is a change to the codebase that does not change the functionality of the project. This could be a change to the structure of the codebase, or a change to the tooling.

- **Bug Fix**: A bug fix is a change to the codebase that fixes a bug in the project.

### Feature

When you are making a feature, you should follow the following workflow:

1. Create a new branch from the `main` branch. The name of the branch should be `feat/<issue>-<description>`. For example, if you are working on issue #1, the name of the branch should be `feat/1-add-git-workflow`.

2. Make your changes to the codebase.

3. Commit your changes to the branch. Each commit should follow the commit structure.

4. Push your changes to the remote branch.

5. Create a pull request from the branch to the `main` branch. The pull request should be titled `feat: <issue> <description>`. For example, if you are working on issue #1, the title of the pull request should be `feat: #1 Add Git Workflow`.

6. Assign a reviewer to the pull request.

7. Once the pull request has been approved, merge the pull request.

### Refactor

When you are making a refactor, you should follow the following workflow:

1. Create a new branch from the `main` branch. The name of the branch should be (`refactor` can be a different type according to the [Commit Structure](#commit-structure)) `refactor/<issue>-<description>`. For example, if you are working on issue #1, the name of the branch should be `refactor/1-update-git-workflow`.

2. Make your changes to the codebase.

3. Commit your changes to the branch. Each commit should follow the commit structure.

4. Push your changes to the remote branch.

5. Create a pull request from the branch to the `main` branch. The pull request should be titled `refactor: <issue> <description>`. For example, if you are working on issue #1, the title of the pull request should be `refactor: #1 Update Git Workflow`.

6. Assign a reviewer to the pull request.

7. Once the pull request has been approved, merge the pull request.

### Bug Fix

When you are making a bug fix, you should follow the following workflow:

1. Create a new branch from the `main` branch. The name of the branch should be `fix/<issue>-<description>`. For example, if you are working on issue #1, the name of the branch should be `fix/1-fix-git-workflow`.

2. Make your changes to the codebase.

3. Commit your changes to the branch. Each commit should follow the commit structure.

4. Push your changes to the remote branch.

5. Create a pull request from the branch to the `main` branch. The pull request should be titled `fix: <issue> <description>`. For example, if you are working on issue #1, the title of the pull request should be `fix: #1 Fix Git Workflow`.

6. Assign a reviewer to the pull request.

7. Once the pull request has been approved, merge the pull request.

## Pull Requests

When you are making a pull request, you should follow the following guidelines:

- The pull request should be titled according to the [Commit Structure](#commit-structure).

- The pull request should be assigned to a reviewer in the relevant domain.

- The pull request should be linked to the relevant issue.

- The pull request should be merged once it has been approved.

## Merging

:::caution Squash & Merge

While there are two ways of merging a PR, you should only use "Squash & Merge" if there are a lot of **miscellaneous** commits in the pull request. If you do not know what to do, then use "Rebase & Merge" or ask the reviewer.

:::

When you are merging a pull request, the pull request should be merged using either:

- **Squash & Merge**: This will squash all the commits in the pull request into a single commit.

- **Rebase & Merge**: This will rebase all the commits in the pull request onto the `main` branch.
