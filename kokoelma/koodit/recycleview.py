from kivy.app import App
from kivy.lang import Builder
from kivy.uix.recycleview import RecycleView

Builder.load_string('''
<RV>:
	viewclass: 'Button'
	RecycleBoxLayout:
		size_hint_y: None
		height: self.minum_height
		orientation: 'vertical'
	''')
class RV(RecycleView):
	def __init__(self, **kwargs):
		super(RV,self).__init__(**kwargs)
		self.data = [{'text' : str(x)} for x in range (20)]
		
class RecycleApp(app):
	def build(self):
	 return RV()
	
RecycleApp().run()