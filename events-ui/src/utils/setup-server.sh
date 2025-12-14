#!/bin/bash
set -e

sudo apt update && sudo apt upgrade -y

sudo apt install -y \
  nginx \
  python3-pip \
  python3-venv \
  nodejs \
  npm \
  git \
  ufw

# Firewall
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# App user
sudo adduser --disabled-password --gecos "" appuser
sudo usermod -aG sudo appuser