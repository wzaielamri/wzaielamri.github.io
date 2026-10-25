---
title: "Claude Status for VS Code"
excerpt: "Every Claude Code chat on my computer and my SSH hosts in one VS Code view: who needs me, who's working, what's left of my plan. Works in Remote-SSH windows too."
collection: projects
project_type: 'side_project'
order: 2
---

The VS Code companion of the [Claude Status widget](/projects/claude_status_widget/). Every Claude Code chat on this computer and on my SSH hosts in one view, so I can see which ones need me, which are working and how much of my plan is left. Talpa, a little pet in a burrow, acts it all out.

<p align="center"><img src="/assets/images/projects/claude_status_vscode/view-dark.png" alt="The Claude Status view in a dark theme: Talpa under &quot;1 chat needs you&quot;, an account with three chats, their pets, plan usage bars and a queued task, and an SSH host with a chat a usage limit stopped" width="300">&nbsp;<img src="/assets/images/projects/claude_status_vscode/view-light.png" alt="The same view in a light theme" width="300"></p>

**GitHub:** [wzaielamri/claude-status-vscode](https://github.com/wzaielamri/claude-status-vscode)

## What it does

- **Every chat in one view**, grouped by account: waiting for me, working, my turn or done. Background jobs and subagents are in there too.
- **What a chat is doing**, right under its name: the command it's running, what it needs, its task progress or Claude's recap. Click it for the last reply and the files it changed.
- **Plan usage with a forecast:** the 5-hour and weekly bars show where my pace ends up and say when I'd run out first.
- **Hit a limit?** Continue the chat on another account, or let it go on by itself once the limit resets.
- **A recap of my week:** how long I was at it, what Claude did, what it would cost at API prices, and ways to use less of the plan.
- **Plans:** read them in VS Code's Markdown preview, comment on a line, send the feedback back and Claude revises the plan.
- **Find a Chat**, star chats and plans, and read what Claude remembers about me.
- **Also over Remote-SSH:** the extension runs on my own computer, so one view shows my local chats and the server's side by side, whichever machine the window is on.
- **Quick to reach:** one click opens a chat on the machine it runs on, and Ctrl+Alt+Shift+C jumps to the one that has waited longest. The status bar counts the chats that need me, and notifications tell me when one finishes.

It also opens as a wide editor tab:

<p align="center"><img src="/assets/images/projects/claude_status_vscode/editor-tab.png" alt="The view opened as a wide editor tab" width="640" style="max-width:100%;height:auto"></p>

## Stack

- **TypeScript**: the extension, bundled with esbuild
- **Preact**: the webview UI
- **Python** (3.7+): the backend shared with the Claude Status widget, also run over `ssh` on remote hosts with nothing installed there

## Privacy

Nothing leaves the computer except the `ssh` connections to the hosts you pick. There is no telemetry, and the view loads nothing from the internet. The one download is the European Central Bank's exchange rates, and only if the recap shows costs in a currency other than US dollars.

*An independent project: not affiliated with or endorsed by Anthropic.*
