package ht2;

import java.io.IOException;
import java.io.InputStream;
import java.util.Scanner;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

//Arrayluokan huono päivitettävyys JSONissa luo loputtomasti kasvavia arrayta jotka sisältävät kaiken ikimuinaisen tiedon ja samat asiat useaan kertaan
public class Ls1tiedkasitJSON {
	
	//Luo tiedoston sisällöstä virran
	public static InputStream tiedotTiedostosta(String path) {
		try {
			InputStream sisaan = Ls1tiedkasitJSON.class.getResourceAsStream(path);
			return sisaan;
		
		} catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	//Muuttaa virran JSONista Stringiksi
	public static String tiedotStringiksi(String path) throws IOException {
		
		InputStream in = tiedotTiedostosta(path);
		Scanner scanner = new Scanner(in);
		String json = scanner.useDelimiter("\\Z").next();
		scanner.close();
		in.close();
		return json;
	}
	public static JSONObject getJSONobject(String path) throws JSONException, IOException {
		return new JSONObject(tiedotStringiksi(path));
		
	}
	//Tarkistaa onko JSONobjecti (määritelty key:lla) olemassa
	public static boolean objektiVirrassa(JSONObject jsonobject, String key) {
		Object o = null;
		try {
			o = jsonobject.get(key);
		}catch(Exception e) {
			
		}
		return o != null;
	}
	//Tulostaa velallisen tiedot pohjautuen tiedoston sijaintiin ja annettuun ID:hen
	public static String VelallisetTiedot (String path, int id) throws JSONException, IOException {
		JSONObject obj = getJSONobject(path);
		JSONArray tiedot = obj.getJSONArray("velalliset");
		
		for (int i = 0; i < tiedot.length(); i++) {
			JSONObject ensimmainen = tiedot.getJSONObject(i);
			String nimi = ensimmainen.getString("nimi");
			int idKas = ensimmainen.getInt("id");
			int numero = ensimmainen.getInt("puhelin");
			String tuloste;
			tuloste = ("ID "+ idKas + " Nimi " + nimi + " Numero " + numero );
			if(idKas == id) {
				return tuloste;
				
			}
		
		}
		return "Ei tulosta";
	}
	public static String getNimi(String path, int id, String haettu) throws JSONException, IOException {
		JSONObject obj = getJSONobject(path);
		JSONArray tiedot = obj.getJSONArray(haettu);
		for (int i = 0; i < tiedot.length(); i++) {
			JSONObject ensimmainen = tiedot.getJSONObject(i);
			String nimi = ensimmainen.getString("nimi");
			int idKas = ensimmainen.getInt("id");
			if(idKas == id) {
				return nimi;
			}
		}
		return "Ei löytynyt";
	}
	public static int getPuh(String path, int id, String haettu) throws JSONException, IOException {
		JSONObject obj = getJSONobject(path);
		JSONArray tiedot = obj.getJSONArray(haettu);
		for (int i = 0; i < tiedot.length(); i++) {
			JSONObject ensimmainen = tiedot.getJSONObject(i);
			int numero = ensimmainen.getInt("puhelin");
			int idKas = ensimmainen.getInt("id");
			if(idKas == id) {
				return numero;
			}
		}
		return 0;
	}
	public static String getNimi2(String path, String id, String haettu) throws JSONException, IOException {
		JSONObject obj = getJSONobject(path);
		JSONArray tiedot = obj.getJSONArray(haettu);
		for (int i = 0; i < tiedot.length(); i++) {
			JSONObject ensimmainen = tiedot.getJSONObject(i);
			String nimi = ensimmainen.getString("nimi");
			String idKas = ensimmainen.getString("id");
			if(idKas == id) {
				return nimi;
			}
		}
		return "Ei löytynyt";
	}
	
	
	public static void LisaaVelallinen (String path, String haettu, String nimi, int numero) throws JSONException, IOException {
		JSONObject obj = getJSONobject(path);
		JSONArray tiedot = obj.getJSONArray(haettu);
		int id = tiedot.length()+1;
		JSONObject lisays = new JSONObject();
		lisays.put("id", id);
		lisays.put("nimi", nimi);
		lisays.put("puhelin", numero);
		tiedot.put(lisays);
	

}
}
