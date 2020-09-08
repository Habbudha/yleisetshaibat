package ht;

import fi.jyu.mit.fxgui.ModalController;
import fi.jyu.mit.fxgui.ModalControllerInterface;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

public class Ls1kirjController implements ModalControllerInterface<String> {
    @FXML
    private TextField tunnusfield;
    private String tns = null;

    @FXML
    private PasswordField ssfield;
    private String ss = null;
    
    @FXML
    private void kirjaudu() {
    tns = tunnusfield.getText();
    ModalController.closeStage(tunnusfield);
    }

	@Override
	public String getResult() {
		return tns;
	}

	@Override
	public void handleShown() {
		tunnusfield.requestFocus();
		
	}

	@Override
	public void setDefault(String oletus) {
	tunnusfield.setText(oletus);
		
	}
	public static String kysyNimi(Stage modalityStage, String oletus) {
	return ModalController.showModal(
	Ls1kirjController.class.getResource("Ls1Ki.fxml"),
	 "Velat",
		modalityStage, oletus);
		 }
	
}
