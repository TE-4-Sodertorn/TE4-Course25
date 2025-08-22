# 🧾 Git Commands Reference

A categorized list of Git commands with explanations.

---

## 🔹 1. Setup & Configuration

Configure Git on your machine.

```bash
git --version                     # Check your Git version
git config --global user.name ""  # Set your name
git config --global user.email "" # Set your email
git config --list                 # Show all Git configs
git help <command>                # Help for a specific command
```

## 2. Starting a Repository

```bash
git init # Initialize a new repository
git clone <url> # Clone a repository
git clone <url> <folder> # Clone into a specific folder
```

## 3. Basic Snapshotting

- Track changes to your project.

```bash
git status # Show file status
git add <file> # Stage a file
git add . # Stage all changes
git reset <file> # Unstage a file
git diff # Show unstaged changes
git diff --staged # Show staged changes
git commit -m "message" # Commit staged changes
git commit -am "message" # Add & commit in one step
```

## 4. Branching & Merging

```bash
git branch # List branches
git branch <name> # Create a branch
git checkout <branch> # Switch branch
git checkout -b <branch> # Create & switch branch
git merge <branch> # Merge branch into current
git branch -d <branch> # Delete a branch
git switch <branch> # Modern branch switch
git switch -c <branch> # Create & switch branch (modern)
```

## 5. Remote Repositories

- Work with GitHub, GitLab, etc.

```bash
git remote -v # Show remotes
git remote add origin <url> # Add a remote
git push -u origin <branch> # Push branch & set upstream
git push # Push changes
git pull # Fetch & merge changes
git fetch # Download changes only
```

## 6. Undoing Changes

- Fix mistakes.

```bash
git restore <file> # Undo changes
git restore --staged <file> # Unstage file
git reset --hard HEAD # Reset to last commit (⚠️ destructive)
git revert <commit> # Undo commit with new commit
git checkout <commit> -- <file> # Restore file from commit
```

## 7. Inspection & History

- See what’s happening in your repo.

```bash
  git log # Show commit history
  git log --oneline # Compact history
  git log --graph --oneline --all # Visualize history
  git show <commit> # Show commit details
  git blame <file> # Show who changed each line
```

## 8. Stashing

- Temporarily save changes.

```bash
git stash # Save changes
git stash list # List stashes
git stash apply # Apply last stash
git stash pop # Apply & drop stash
git stash drop # Delete a stash
```
