import Tecla from "./Tecla";

function App(){

	const teclas = [
		{
			clique: "Tools",
		},
		{
			clique: "Pricing",
		},
    {
			clique: "Blog",	
		},
    {
			clique: "About",
		},
    {
			clique: "Customers",
		},
	];

	return(

		<div className="tudo"> 
			{
			teclas.map((pri, sec) => {
					return <Tecla key={sec}
							clique={pri.clique}
						/>;
				})
			}
	  </div>
	);
}

export default App;