package ht2;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Arrays;

import javax.imageio.IIOException;

public class Ls1Velalliset {
	private static final int MAX_VELALLISIA = 10;
	protected Ls1Velallinen [] alkiot = new Ls1Velallinen[MAX_VELALLISIA];
	
	
	/*
	
	public static void main(String[] args) throws IOException {
		
		
		String[] y = tiedotTaulussa();
		System.out.println(getVelallinenkpl(y));
		
		String[] u = tiedotTaulussa();
		for(String h : u) {
			System.out.println(h);
		}
		int[] xyz = idt(tiedotTaulussa());
		for(int id : xyz) {
			System.out.println(id);
		}
		int[] xyzxx = numerot(tiedotTaulussa());
		for(int numero : xyzxx) {
			System.out.println(numero);
		}
		String[] x = nimet(tiedotTaulussa());
		for(String nimet : x) {
			System.out.println(nimet);
		}
		System.out.println(getNimi(x, 3));
		System.out.println(getId(x, "spata"));
	
		for(Ls1Velallinen velallinen : velallistaulukko(tiedotTaulussa(), 0)) {
			System.out.println(velallinen);
		}
	}
	*/
	

	
	
	//Palauttaa velallisten lukum‰‰r‰n tiedostosta
	public int getVelallinenkpl(String[] t) {
		int kountteri = 0;
		for(String x : t) {
			kountteri++;	
		}
	return kountteri;
	}
	
	//Taulukko kaikista velallisista olioina
	public  Ls1Velallinen[] velallistaulukko(String[] t) throws IOException {
		int maara = getVelallinenkpl(t);
		Ls1Velallinen[] velalliset = new Ls1Velallinen[maara];
		String[] nimet = nimet(t);
		int[] idt = idt(t);
		int[] numerot = numerot(t);
		
		for(int i = 0; i < velalliset.length; i++) {
			velalliset[i] = new Ls1Velallinen(idt[i], nimet[i], numerot[i] );
			
		}
		
	
		return velalliset;
		
	}
	//Taulukko ilman erikoismerkkej‰ kaikista velallisista
	
	
	public  String[] tiedotTaulussa () throws IOException {
			BufferedReader lukija = new BufferedReader(new InputStreamReader(new FileInputStream("resources\\velalliset.dat")));
			String[] nim = new String[3];
			int kountteri = 0;
			int kountteri2 = 0;
			
			while(lukija.ready()) {
						
						String rivi = lukija.readLine();
						rivi.toLowerCase();
						kountteri++;
						
						if(kountteri > 1) {
							
							nim[kountteri2] = rivi;	
							nim[kountteri2] = nim[kountteri2].replaceAll("\\s+","");
							nim[kountteri2] = nim[kountteri2].replaceAll("[|]"," ");
							kountteri2++;
						}
		}
			lukija.close();
			return nim;
	}
	
	//Lis‰t‰‰n velallinen velallistaulukkoon
	public  Ls1Velallinen[] lisaaVelallinen(Ls1Velallinen[] velalliset, String nimi, int numero) throws IOException {
		String[] y = tiedotTaulussa();
		int uusid = getVelallinenkpl(y);
		Ls1Velallinen uusivelallinen = new Ls1Velallinen(uusid, nimi, numero);
		ArrayList<Ls1Velallinen> temp= new ArrayList<Ls1Velallinen>(Arrays.asList(velalliset));
		temp.add(uusivelallinen);
		velalliset = (Ls1Velallinen[]) temp.toArray();
		return velalliset;
	}
	//Kirjoittaminen tiedostoon
	public  void tiedostoonUusiobjekti(Ls1Velallinen lisays) throws IOException {
		int id = lisays.getId();
		String nimi = lisays.getNimi();
		int numero = lisays.getNumero();
		
		try(FileWriter fw = new FileWriter("resources\\velalliset.dat", true);
		BufferedWriter bw = new BufferedWriter(fw);
		PrintWriter out = new PrintWriter(bw)) {
			out.println("|" + Integer.toString(id) + "|" + nimi + "|" + Integer.toString(numero) + "|");
		}
		catch(IOException e) {
			
		}
		
	}
	
	//Kaikki ID:t taulukossa 
	public  int[] idt (String[] t) {
		int[] id = new int [3];
		for (int i = 0; i < t.length; i++) {
			String muokattava;
			muokattava = t[i].replaceAll("[\\D]", "");
			muokattava = muokattava.replaceAll("\\s+","");
			muokattava = muokattava.substring(0,1);
			id[i] = Integer.parseInt(muokattava);
	
			
		}
		return id;
	}
	//Kaikki numerot taulukossa
		public  int[] numerot (String[] t) {
			int[] numero = new int [3];
			for (int i = 0; i < t.length; i++) {
				String muokattava;
				muokattava = t[i].replaceAll("[\\D]", "");
				muokattava = muokattava.replaceAll("\\s+","");
				muokattava = muokattava.substring(1,muokattava.length()-1);
				numero[i] = Integer.parseInt(muokattava);
		
				
			}
			return numero;
		}
	//Kaikki nimet taulukossa
		public  String[] nimet (String[] t) {
			String [] nimet = new String[3];
			for(int i = 0; i < t.length; i++) {
				String muokattava;
				muokattava = t[i].replaceAll("[^a-zA-Z]", "");
				nimet[i] = muokattava;
			}
			return nimet;
		}
	// Palauttaa nimihaun pohjalta ID:n
		public  int getIdnim (String [] nimet, String kuka) {
			int id = 0;
			kuka = kuka.toLowerCase();
			for(int i = 0; i < nimet.length; i++) {
				if(nimet[i].equals(kuka)) {
					id = i;
				}
				
			}
			return id +1;
		}
	//Palauttaa idn pohjalta numeron
		public  int getNumero(int[] numerot, int id) {
			id = id-1;
			return numerot[id];
			
		}
	//Paluttaa idn pohjalta nimen
		public  String getNimi (String[] nimet, int id) {
			id = id-1;
			return nimet[id];
		}
		
		
		public Ls1Velallinen getVelallinen(int id) throws IOException {
						
				velallistaulukko(tiedotTaulussa());
				Ls1Velallinen testi = alkiot[id];
				return testi;
				
		
			
		}
		
}
	