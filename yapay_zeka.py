import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, classification_report
import matplotlib.pyplot as plt
from sklearn.metrics import ConfusionMatrixDisplay

df = pd.read_csv("C:/Users/ramaz/OneDrive/Masaüstü/lojistik.csv")
df['Logistics_Delay_Reason'] = df['Logistics_Delay_Reason'].fillna('Unknown')

# Bağımsız değişkenler (X) ve hedef değişken (y)
X = df.drop(['Logistics_Delay', 'Timestamp', 'Asset_ID'], axis=1)
y = df['Logistics_Delay']
categorical_features = ['Shipment_Status', 'Logistics_Delay_Reason', 'Traffic_Status']
# Ön işleyici: kategorik verileri sayısala çevir
preprocessor = ColumnTransformer(
    transformers=[
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
    ],
    remainder='passthrough'  # Diğer sütunları aynen bırak
)

# Model pipeline: önce veriyi hazırla, sonra modeli eğit
model = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', DecisionTreeClassifier(random_state=42))
])
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)
# Modeli eğit
model.fit(X_train, y_train)

# Tahmin yap
y_pred = model.predict(X_test)
print("Doğruluk Oranı (Accuracy):", accuracy_score(y_test, y_pred))
print("\nSınıflandırma Raporu:\n", classification_report(y_test, y_pred))
print(df['Logistics_Delay'].value_counts())

ConfusionMatrixDisplay.from_estimator(model, X_test, y_test)
plt.title("Confusion Matrix")
plt.show()






