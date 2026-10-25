---
title: "Claude Status Widget"
excerpt: "A KDE Plasma and GNOME panel widget that shows which of my Claude Code chats are working, which need me and how much of my plan is left, across accounts and SSH hosts."
collection: projects
project_type: 'side_project'
order: 1
---

I usually have a handful of Claude Code chats running, on different accounts and a few machines, and I kept losing track of which one was waiting for me. So I built a panel widget for KDE Plasma 6, plus a GNOME Shell extension, that tells me at a glance. Made for my own day to day.

<p align="center"><img src="/assets/images/projects/claude_status_widget/popup-light.png" alt="The Claude Status popup: the big Talpa says one chat needs you; below, each account shows its chats as pets, plan usage bars, token totals and its sessions" width="48%">&nbsp;<img src="/assets/images/projects/claude_status_widget/popup-dark.png" alt="The same popup in a dark theme" width="48%"></p>

**GitHub:** [wzaielamri/claude-status](https://github.com/wzaielamri/claude-status)

## What it does

- **One look at the panel:** how many chats need me, with my 5-hour plan usage right next to it. All my accounts and SSH hosts are in there, and nothing is installed on the hosts.
- **What a chat is up to, without opening it:** the command it's running, what it's asking permission for, how far its task list is, or Claude's own recap of where it left off.
- **One click to get there:** the right Konsole tab, tmux pane, VS Code tab or background job. A shortcut key jumps to whichever chat has waited longest.
- **Limits, handled:** the usage bars show where my pace ends up and warn me before I run out. If a chat gets stopped anyway, I continue it on my other account or let it go on by itself once the limit resets.
- **Start chats from the popup:** in a terminal or VS Code, with a task, in the background, or queued for later.
- **A recap of my week:** how long I was at it, how long Claude worked, what the same work would cost at API prices, and tips to use less of the plan.
- **And more:** a diff of what a chat changed, a warning when two chats edit the same files, plans and memories I can read and edit, search across all chats, and one summary of what happened while I was away.
- **A pet for every chat:** Talpa lives in a burrow and acts its chat out. It types while the chat works, holds up a sign when it needs me and falls asleep once it's done.

<p align="center"><img src="/assets/images/projects/claude_status_widget/pets.gif" alt="Pets reacting: a chat finishes and its pet celebrates, a new chat's pet digs up out of the ground, and the big Talpa cheers when a usage limit resets" width="500" style="max-width:100%;height:auto"></p>

The GNOME version covers the basics. A few extras, like limit handling, plans and queued tasks, are Plasma-only for now.

## Stack

- **QML / KDE Plasma 6**: the panel widget and popup
- **GJS**: the GNOME Shell extension (GNOME Shell 49+)
- **Python** (3.7+, standard library only): reads Claude Code's session registry, background jobs and transcripts; the same script runs on SSH hosts
- **D-Bus and KWin scripts**: switching Konsole tabs and raising windows on Plasma Wayland
- **SSH ControlMaster**: shared connections, so checks on remote hosts stay quick

## Privacy

The widget only reads the files Claude Code writes. No Anthropic API calls, no telemetry. The one download is the European Central Bank's exchange rates, and only if I show the recap's costs in a currency other than US dollars.

There is also a [VS Code companion](/projects/claude_status_vscode/) built on the same backend.

*An independent project: not affiliated with or endorsed by Anthropic, and written with AI assistance.*
