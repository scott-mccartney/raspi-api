# Raspberry Pi API (Setup w/out display)
- Login
	- username: pi
	- password: raspberry
		- Change password to pi using `passwd`
- Setup wifi
	- https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md
	- `sudo raspi-config`
	- Select (2): Network Options
	- Enter SSID/password
	- Change hostname? (scottmccraspi)
	- Go to "Interfacing Options"
		- Enable SSH
		- Enable Camera?
- Get IP Address
	- Run `hostname -I`
		- Try `ifconfig` 
	- 192.168.200.183
- Connect to Pi using SSH
	- Open Putty.exe
	- Enter IP Address and click "OK"
		- First time: Click "Yes" to key message pop-up
- Download Node/NPM
	- `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash`
	- `nvm install --lts`	
	- OR: 
		- `sudo apt-get update`
		- `sudo apt-get install nodejs`
		- `sudo apt-get install npm`
- Update packages (Optional)
	- `sudo apt-get update`
	- `sudo apt-get upgrade`
- Restart Raspberry Pi
	- `sudo reboot`
- Remote Development with VS Code
	- https://code.visualstudio.com/docs/remote/ssh
	- Open VS code
	- Ctrl+Shift+P to open command
	- `Remote-SSH: Add new SSH host`
	- `ssh 192.168.200.183`
	- Open config
	```
	Host RaspberryPi
	  User pi
	  HostName 192.168.200.183
	```
	- Use "Remote Explorer" or open Remote-SSH to open SSH connection
	- Sign in with password
- Port Forwarding
	- https://www.cincinnatibell.com/help-center/internet/wifi-setup-and-password/how-do-i-set-up-port-forwarding-on-my-zyxel-14-(1)
	- Check "Active"
	- Service Name: RaspberryPi (Or whatever name you want)
	- WAN Interface: Ethernet_DEFAULT
	- WAN IP: *leave blank*
	- Start Port: 9876
	- End Port: 9876 (end of range for port forwarding)
	- Translation Start Port: 9876
	- Translation End Port: 9876
	- Server IP Address: 192.168.200.183 (Result of IP address above)
	- Protocol: TCP/UDP
	