package ht;

import fi.jyu.mit.fxgui.Dialogs;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.stage.Stage;

public class Ls1lvController {
    @FXML
    private Button Tallennabtn;

    @FXML
    private Button closeButton;

	

	@FXML private void handleTallenna() {
		tallenna();
	}
	@FXML private void handlePeruuta() {
		peruuta();
}
	private void tallenna() {
		Dialogs.showMessageDialog("Tallennetetaan! Mutta ei toimi vielä");
	}
	private void peruuta() {
		Dialogs.showMessageDialog("Kuitataan! Mutta ei toimi vielä");
		Stage stage = (Stage) closeButton.getScene().getWindow();
		stage.close();
	}
	
}
