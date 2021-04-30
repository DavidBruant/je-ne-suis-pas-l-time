<script>
	export let groupes;
</script>

{#each groupes as groupe}
	<section>
		<h2>{groupe.name}</h2>
		<table>
			<thead>
				<tr>
					<th>Nature</th>
					<th>Fonction</th>
					<th>Montant</th>
				</tr>
			</thead>
			<tbody>
				{#each groupe.elements.sort(({MtReal: MtReal1}, {MtReal: MtReal2}) => MtReal2 - MtReal1).slice(0, 50) as {Fonction, MtReal, Nature}}
					<tr>
						<td>{Nature}</td>
						<td>{Fonction}</td>
						<td>{MtReal.toFixed(2)}€</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
{/each}

<style lang="scss">
	
	:global(main) {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;

		@media (min-width: 640px) {
			max-width: none;
		}
	}

	section{
		max-width: 40rem;
		margin: auto;
		margin-bottom: 2rem;
	}

	h2 {
		color: #222;
		text-decoration: underline;
		font-size: 1.4em;
		font-weight: 100;
	}
	
</style>
