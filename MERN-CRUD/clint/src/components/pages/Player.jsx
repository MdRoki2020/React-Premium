import React from 'react'
import '../Style/Player.css'

const Player = () => {
  return (
    <div>
      <div class="container">
	<div class="row">
		<div class="col-md-8">
			<div class="mediaPlayer img-thumbnail rounded img-fluid">
				<video width="850" height="500" controls>
				  <source src="demo.mp4" type="video/mp4" size="576"/>
				  <source src="demo.mp4" type="video/mp4" size="720"/>
				  <source src="demo.mp4" type="video/mp4" size="1080"/>
				  
				  
				  <track src="demo.mp4" kind="captions" srclang="en" label="English"/>
				  <track src="demo.mp4" kind="captions" srclang="fr" label="Francais"/>
				  <track src="demo.mp4" kind="captions" srclang="id" label="Indonesia"/>
				  <track src="demo.mp4" kind="captions" srclang="ms" label="Melayu"/>
				Your browser does not support the video tag.
				</video>
			</div>
		</div>
	<div class="col-md-4">
		<div class="containsList">
		<table class="table table-striped">
			<tbody>
				<tr>
				  <td>@mdo</td>
				</tr>
				<tr>
				  <td>@fat</td>
				</tr>
				<tr>
				  <td>@twitter</td>
				</tr>
				<tr>
				  <td>@fat</td>
				</tr>
				<tr>
				  <td>@twitter</td>
				</tr>
				<tr>
				  <td>@fat</td>
				</tr>
				<tr>
				  <td>@twitter</td>
				</tr>
				<tr>
				  <td>@fat</td>
				</tr>
				<tr>
				  <td>@twitter</td>
				</tr>
				<tr>
				  <td>@fat</td>
				</tr>
				<tr>
				  <td>@twitter</td>
				</tr>
				<tr>
				  <td>@fat</td>
				</tr>
				<tr>
				  <td>@twitter</td>
				</tr>
				<tr>
				  <td>@fat</td>
				</tr>
				<tr>
				  <td>@twitter</td>
				</tr>
				<tr>
				  <td>@fat</td>
				</tr>
				<tr>
				  <td>@twitter</td>
				</tr>
				<tr>
				  <td>@fat</td>
				</tr>
				<tr>
				  <td>@twitter</td>
				</tr>
				<tr>
				  <td>@fat</td>
				</tr>
				<tr>
				  <td>@twitter</td>
				</tr>
				<tr>
				  <td>@fat</td>
				</tr>
				<tr>
				  <td>@twitter</td>
				</tr>
				<tr>
				  <td>@fat</td>
				</tr>
				<tr>
				  <td>@twitter</td>
				</tr>
				<tr>
				  <td>@fat</td>
				</tr>
				<tr>
				  <td>@twitter</td>
				</tr>
				
			</tbody>
        </table>
		</div>
	</div>
	</div>
	</div>
    </div>
  )
}

export default Player
