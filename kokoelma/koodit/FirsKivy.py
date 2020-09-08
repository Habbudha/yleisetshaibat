
from kivy.uix.button import Button
 
from kivy.app import App
 
from functools import partial

from kivy.app import App
 
from kivy.uix.boxlayout import BoxLayout
 
from kivy.lang import Builder
 
Builder.load_string("""<KivyButton>:
	Button:
		text: "DilleDong!"
		size_hint: .12, .12
		Image:
			source: 'images.jpg'
			center_x: self.parent.center_x
			center_y: self.parent.center_y
			""")
 
class KivyButton(App, BoxLayout):
 
    def disable(self, instance, *args):
 
        instance.disabled = True
 
    def update(self, instance, *args):
 
        instance.text = "I am Disabled!"
 
    def build(self):
        return self
 
KivyButton().run()