New Project
				I
Windows
1) Open cmd or WindowsShell (go to directory with your project -> Shift + right mouse click)
Mac
1) Open terminal (cd C:\work\watches)
VS Code
1) Terminal -> go to your project and check directory (cd C:\work\watches)

		git init 

* if u cant see hidden file .git use (cmd + shift + dot) on Mac

				II
Introduce YourSelf
		git config
	a) globally (all projects on this pc will be above name that u will use) * use that first
		git config --global user.name "Name"
		git config --global user.email example@email.com
	
	b) locally (will be aplyed only for this project)
		git config --local user.name "Name"
		git config --local user.email example@email.com
	* u can check if u did correct in .git -> config

				III
Repository's local check points
		git status
	*if they are red

		git add -A (or git add main.css/ git *.css(will be added all css files))
		git status 
	*They are green

		git commit -a -m"some description on check point"
		
		*git log (give you all list of commits u've done)

				IV
GitHub back up repository

1) create repository on github
2) lick your project with repository
		git remote add origin https://github.com/MarcusCrocus/watch.git
		git push -u origin master
		
		
	


	



