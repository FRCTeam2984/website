---
title: Git Basics Training
path: /resources/courses/git-basics
---

| Command                                              | Description                                                                               |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| git config --help                                    | Refers to manual page to explain all commands. The lines in front of help are two dashes. |
| git help _command_                                   | Tells you more about the command                                                          |
| git config --global user.name                        | Sets your name so people know what you are doing regardless of the computer you use       |
| git config --global user.email                       | Sets your email so people know what you are doing regardless of the computer you use      |
| ls                                                   | See what is in the directory you are currently in                                         |
| cd _name-of-directory_                               | Move into a new directory                                                                 |
| mkdir _name-of-directory_                            | Make a new directory                                                                      |
| git init                                             | Creates a file to allow git to work with the directory                                    |
| git remote _handle-for-directory_ <url>              | Create a copy of a repository that this computer can push/pull to/from                    |
| rm -rf _name-of-directory_                           | Delete a directory                                                                        |
| git add _pathway-to-file_                            | Add file to Staging Area. A pathway is /home/Documents/website/team-page.md               |
| git add -A                                           | Add all files that have been changed to Staging Area                                      |
| git status                                           | See what files are in the Staging Area                                                    |
| git reset _name-of-file_                             | Removes file from Staging Area                                                            |
| git reset                                            | Removes all files from Staging Area                                                       |
| git commit -m "Commit Message"                       | Commits the changes allowing them to be seen on Github                                    |
| git log                                              | See the time, author, and title of commits                                                |
| git push _handle-for-repository_ _handle-for-branch_ | pushes changes to a repository so other people can now update their own repositories      |
| git pull _handle-for-repository_ _handle-for-branch_ | pulls changes from a repository so you update your repository                             |

For those wishing to get somewhat proficient with Github this explanation can give you the very basics.

With Git you will be typing in names of files and directories. Sometimes they are created by you sometimes they are created by other people. If you aren't directly working with the person you may not remember if they use capitol letters or if whether they use spaces or dashes to separate words. To avoid confusion, everyone in Robotics uses kabob-case. In this style all words consist ONLY of lower case letters and words are connected by dashes.

Git is a Distributed VCS, on Github there is a remote repository that acts as the main version of the project a group of people are working on.

When you work on Github you _pull_ from the remote repository, this acts as the local _repository_. Changes you make to the code will change the _local repository_ and not the _main repository_. This allows many people to work on the same project without changing the original it also allows mistakes to be easily found since updates are restricted to limited changes and can always be rolled back.

Make sure to use **Ubuntu**/**Linux** this will allow you to be on the same level of expertise as the rest of the team and allow people to help you easily.

To start open the _Terminal_ you can do so by opening the Application finder in the bottom left corner.

Do these commands when you start using the Terminal:

1. git config --global user.name
2. git config --global user.email

The way your local repository will work:

**Working Directory**-
Where you make changes to the code (Does not affect the main repository)

**Staging Area**-
The place before it the changes are committed

**Commit to Repository**-
Changes your local repository which can be pushed to the main repository

When you want to make a new project:

1. Open Github and create an account. Make your username and password simple because you will need to repeatedly enter this info when you make commits.
2. Create a Directory, by typing mkdir _____  in the future make it descriptive but for now call it test. Don’t change any of the preset settings.
3. Click back on Terminal. Use ls to see what is in the folder.
4. You most likely have a Documents folder we will be using that one. If you don’t have one you can just make a folder. Use cd Documents to move into the documents directory.
5. Use cd test to get into the test folder.
6. Now use git init to create a file that will allow you to ‘push’ with Git
7. To create the Repository use git remote ______ <url> name it origin
8. Now you have an empty repository on your computer and a repository on Github

To. write your first file and push to Repository:

1. Write something on Leafpad/Notepad
2. Save it to the Directory named Test
3. Click on the Terminal. Type git add -A
4. Type git commit -m “First Commit”
5. Type git push origin master
6. Click on GitHub you know just changed the main version
