## learn-react-app
Be proactive! Be reactive! Learn React!

## Branch Guidelines

Make your changes in a new git branch.

```shell
$ git checkout -b fix/1234_bug-fix
```

### Branch Name Format

Each branch name must be name in special format:

```
<type>/<issue number>_<short name>
```

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing or correcting existing tests
- **chore**: Changes to the build process or some other changes

### Issue number

**Optional** in case there is corresponding issue created

### Short name

Short name should be in Kebab Case

## Git Commit Guidelines

### Commit Message Format

Each commit message must be in special format:

```
<type>(<scope>): <subject>
```

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing or correcting existing tests
- **chore**: Changes to the build process or some other changes

### Scope

The scope specify what part of service has being changed

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- capitalize first letter
- no dot (.) at the end

## How to Start Development

Run `npm i` to install all dependencies.
Note that if you want to refresh the existing project use `npm run fresh` command.

Run `npm start` to start project locally.

> Browse [http://localhost:3000/](http://localhost:3000) to check if development server is up and running.
