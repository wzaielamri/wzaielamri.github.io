---
title: "Claude Status Widget"
excerpt: "A KDE Plasma 6 widget and GNOME Shell extension that keeps all my Claude Code sessions in view: which chats are working, which need me and how much of my plan is left, across accounts and SSH hosts."
collection: projects
project_type: 'side_project'
order: 1
---

A KDE Plasma 6 widget and GNOME Shell extension that keeps all my Claude Code sessions in view. With several sessions running across different profiles and machines, one glance at the panel tells me which chats need me, which are working and how much of my plan is left. Built to make my own day-to-day work easier.

<p align="center"><img src="/assets/images/projects/claude_status_widget/popup-light.png" alt="The Claude Status popup: a big Clawd says one chat needs you; below, each account shows its chats as pets, plan usage bars, token totals and its sessions" width="48%">&nbsp;<img src="/assets/images/projects/claude_status_widget/popup-dark.png" alt="The same popup in a dark theme" width="48%"></p>

**GitHub:** [wzaielamri/claude-status](https://github.com/wzaielamri/claude-status)

## What it does

- **Panel icon** in the state color, with a badge counting the sessions that need you and the 5-hour plan usage next to it
- **One section per Claude account**: plan usage with reset countdowns, token totals, and every session (terminal, background job or VS Code) with its state, model and context fill
- **Jump to a session** with one click: Konsole switches to the right tab (or tmux to its pane), VS Code opens the conversation, and background jobs are attached in a terminal
- Start new chats, stop background sessions and reopen recent chats from the popup
- **Notifications** with sounds when a session needs you or finishes a long turn
- **SSH hosts** from `~/.ssh/config` join the dashboard, with nothing installed on the host
- **A pet for every chat**: an animated Clawd that acts its chat out. It types while the chat works, holds up a warning sign when the chat needs you and sleeps once it's done

<p align="center"><img src="/assets/images/projects/claude_status_widget/pets.gif" alt="Pets reacting: a chat finishes and its pet celebrates, a new chat's pet walks in, and the big Clawd charges up when a usage limit resets" width="500" style="max-width:100%;height:auto"></p>

## Stack

- **QML / KDE Plasma 6**: the panel widget and popup
- **GJS**: the GNOME Shell extension (GNOME Shell 49+)
- **Python** (3.7+, standard library only): reads Claude Code's session registry, background jobs and transcripts; the same script runs on SSH hosts
- **D-Bus and KWin scripts**: switching Konsole tabs and raising windows on Plasma Wayland
- **SSH ControlMaster**: shared connections, so checks on remote hosts stay quick

## Privacy

The widget only reads the files Claude Code writes. It doesn't call any Anthropic API and sends no data anywhere.

There is also a [VS Code companion](/projects/claude_status_vscode/) built on the same backend.

*An independent project: not affiliated with or endorsed by Anthropic, and written with AI assistance.*
