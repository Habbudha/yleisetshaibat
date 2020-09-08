package ht2;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.io.StringReader;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import ohj2.Pvm;

public class Ls1Velat {
	int MAX_VELKOJA = 100;
	Ls1Velka[] velat = new Ls1Velka[MAX_VELKOJA];
	

	//PVM luokka päivämäärien käsittelyyn, ei vielä käytössä 5. vaiheessa
	public class Pvm{
		private int p;
		private int k;
		private int v;
		
		
		public int karkausvuosi(int vv) {
	        if ( vv % 400 == 0 ) return 1;
	        if ( vv % 100 == 0 ) return 0;
	        if ( vv % 4 == 0 ) return 1;
	        return 0;
	    }
		
		public  void Paivays() {
			DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
			LocalDateTime nyt = LocalDateTime.now();
			String sPaiva = nyt.format(dtf);
			sPaiva = sPaiva.replaceAll("[/]", "");
			System.out.println(sPaiva);
			p = Integer.parseInt(sPaiva.substring(0,2));
			k = Integer.parseInt(sPaiva.substring(2,4)); 
			v = Integer.parseInt(sPaiva.substring(4,8));
			
			
		}
		
		public void alusta(int ipv, int ikk, int ivv) {
			 int KPITUUDET[][] = {
		            // 1  2  3  4  5  6  7  8  9 10 11 12
		            { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 },
		            { 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 }
		    };
			
			
			int kpituus = 1;
		      if(ikk > 12) return;
		      if (ikk == 0){
		      kpituus = KPITUUDET[karkausvuosi(ivv)][ikk];
		      }
		      else {
		      kpituus = KPITUUDET[karkausvuosi(ivv)][ikk - 1];    
		      }
		      
		      if(ipv > kpituus || ikk > 12 || getPv() > kpituus) return; 
		      if(ipv > 0 && ipv <= kpituus) this.p = ipv;
		      if(ikk > 0 && ikk <= 12) this.k = ikk;
		      if(ivv < 3000 && ivv > 1000) this.v = ivv;
		  }
		
		
		public Pvm() {
	        this(0, 0, 0);
	    }


	    public Pvm(int pv) {
	        this(pv, 0, 0);
	    }


	    public Pvm(int pv, int kk) {
	        this(pv, kk, 0);
	    }

		
		public Pvm(int p, int k, int v) {
			Paivays();
			alusta(p, k, v);
		}
		
		public int compareTo(Pvm pvm2) {
			int pvertaus = this.getPv() - pvm2.getPv();
			int kvertaus = this.getKk() - pvm2.getKk();
			int vvertaus = this.getVv() - pvm2.getVv();

			if (pvertaus < 0 && kvertaus < 0 && vvertaus < 0) {
				return -1;
			}
			if (pvertaus == 0 && kvertaus == 0 && vvertaus == 0) {
				return 0;
			} else {
				return 1;
			}
		}
		public String toString() {
	        return p + "." + k + "." + v;
	    }
		public int getPv() {
			return p;
		}
		public int getKk() {
			return k;
		}
		public int getVv() {
			return v;
		}
	
	}
	
	//Tästä lähtien tiedostonkäsittelyä
	
	public   String[] tiedotTaulussa () throws IOException {
		int rivit = Rivit();
		BufferedReader lukija = new BufferedReader(new InputStreamReader(new FileInputStream("resources\\velat.dat")));
		String[] nim = new String[rivit];
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
	//Laskee tiedoston rivit
	public  int Rivit () throws IOException {
	 int rivit;
	 BufferedReader lukija = new BufferedReader(new InputStreamReader(new FileInputStream("resources\\velat.dat")));
	 LineNumberReader lnr = new LineNumberReader(lukija);
	 lnr.skip(Long.MAX_VALUE);
	 rivit =  lnr.getLineNumber();
	 return rivit;
 }
 
 //Hakee rivin velka id:llä
	public  String HaettuRivi(String[] t, String vid) {
	 String vertaus;
	 for(String x : t) {
		 vertaus = x.substring(3,6);
		 if (vertaus.equals(vid)) {
			 return x;
		 }
	 }
	return "Ei löytynyt";
	 
	 
 }
	//Tekee taulun tietystä velallisesta velkalogia varten
	public  String [] VelallisenVelat(String[] t, int id) {
		 int vertaus;
		 int kountteri = 0;
		 for(String x : t) {
			 vertaus = Integer.parseInt(x.substring(1,2));
			 if (vertaus == id) {
				 kountteri++;
			 }
		 }
		 String [] velat = new String[kountteri];
		 int laskuri = 0;
		 for(int i = 0; i < t.length; i++) {
			 vertaus = Integer.parseInt(t[i].substring(1,2));
			 if (vertaus == id) {
				 velat[laskuri] = t[i];
				 laskuri++;
			 }
		 }
		return velat;
	}
		 
	
	
 //Kaikki tekstitaulun tiedot velkataulukkoon,
 public  void velat (String[] t) throws IOException {
	 int maara = t.length;
	 Ls1Velka[] velat = new Ls1Velka[maara];
	 int[] idt = IDit(t);
	 String [] vidIt = vidIt(t); 
	 String [] pvm = pvm(t);
	 String [] mpvm = mpvm(t);
	 int [] kuitattu = kuitattu(t);
	 int [] summa = summat(t);
 	 for(int i = 0; i < velat.length; i++) {
		 velat[i] = new Ls1Velka(idt[i], vidIt[i], pvm[i], mpvm[i], kuitattu[i], summa[i]);
		 
	 }
 	 for(int i = 0; i < velat.length; i++) {
 		this.velat[i] = velat[i];
 	 }
 	 
 }
 //Laskee velkojen summan, käytettävä vasta kun suoritettu Velallisenvelat + velat aliohjelma
 public  int summa (Ls1Velka[] velat) {
	 int summa = 0;
	 for(Ls1Velka x : velat) {
		 summa = summa + x.getSumma();
	 }
	 return summa;
 }

 //Kaikki tiedoston velkaId:t yhdessä taulussa
 public  String[] vidIt(String[] t) {
	 String[] vid = new String[t.length];
	 for(int i = 0; i < vid.length; i++) {
		 vid[i] = t[i].substring(3,6);
	 }
	 return vid;
 }
 public  int[] IDit(String[] t) {
	 int[] id = new int[t.length];
	 for(int i = 0; i < id.length; i++) {
		 id[i] = Integer.parseInt(t[i].substring(1,2));
	 }
	 return id;
 }
 public  int[] kuitattu(String[] t) {
	 int[] kuitattu = new int[t.length];
	 for(int i = 0; i < kuitattu.length; i++) {
		 kuitattu[i] = Integer.parseInt(t[i].substring(29,30));
	 }
	 return kuitattu;
 }
 public  int[] summat(String[] t) {
	 int summat[] = new int[t.length];
	 for(int i = 0; i < summat.length; i++) {
		 summat[i] = Integer.parseInt(t[i].substring(31, t[i].length()-1));
	 }
	 return summat;
 }
 public  String[] pvm (String[] t) {
	 String[] pvm = new String[t.length];
	 for(int i = 0; i < pvm.length; i++) {
		 pvm[i] = t[i].substring(7,17);
		 
	 }
	 return pvm;
 }
 public  String[] mpvm (String[] t) {
	 String[] pvm = new String[t.length];
	 for(int i = 0; i < pvm.length; i++) {
		 pvm[i] = t[i].substring(18,28);
		 
	 }
	 return pvm;
 }
	
/*	
 public  void main (String[] args) throws IOException {
		System.out.println(Rivit());
		String [] testi = tiedotTaulussa();
		String[] testi2 = VelallisenVelat(testi, 1);
		Ls1Velka[] velat = velat(testi2);
		int summa = summa(velat);
		
		for(Ls1Velka yks : velat) {
			System.out.println(yks);
		}
		for(String x : testi2) {
			System.out.println(x);
		}
		System.out.println(summa);
		

		
	}*/
}
