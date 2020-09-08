package ht2;

import java.io.IOException;

public class KokoVelka  {
	
	private final Ls1Velalliset velalliset = new Ls1Velalliset();
	private final Ls1Velat velat = new Ls1Velat();
	
	
	public String getNimi(int id) throws IOException {
		Ls1Velallinen kasiteltava = velalliset.getVelallinen(id);
		String palautettava = kasiteltava.getNimi();
		return palautettava;
	}
	
	
}
