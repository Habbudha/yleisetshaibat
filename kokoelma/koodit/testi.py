from kivy.app import App
from kivy.uix.button import Button
from functools import partial

class FirstKivy(App):
		
	def disable(self, instance, *args):
		instance.disabled = True

	def update(self, instance, *args):
		instance.text = ("Olen vanmainen")
		FirstKivy().run()
	
	def disable(self, instance, *args):
		
		instance.disabled = True
	
	
    def build(self):
		
		napiska = Button(text="Paina mua")
		
        napiska.bind(on_press=partial(self.disable, napiska))
		
		napiska.bind(on_press=partial(self.update, napiska))
		
		return napiska
	
FirstKivy().run()