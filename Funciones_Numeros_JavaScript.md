
# Funciones para Parsear Números y Generar Números Aleatorios en JavaScript

---

## **1. Parsear Números**

### **1.1 `parseInt()`**
Convierte una cadena en un número entero. Si la cadena contiene caracteres no numéricos al principio, estos serán ignorados.

- **Sintaxis:** `parseInt(string, base)`
  - `string`: Cadena a convertir.
  - `base`: (Opcional) La base numérica, por defecto es 10.

- **Ejemplo:**
  ```javascript
  const numero = parseInt("42"); // Devuelve 42
  const hexadecimal = parseInt("1A", 16); // Devuelve 26 (base 16)
  const invalido = parseInt("abc"); // Devuelve NaN
  ```

---

### **1.2 `parseFloat()`**
Convierte una cadena en un número de punto flotante.

- **Sintaxis:** `parseFloat(string)`

- **Ejemplo:**
  ```javascript
  const numero = parseFloat("42.5"); // Devuelve 42.5
  const invalido = parseFloat("abc"); // Devuelve NaN
  ```

---

### **1.3 `Number()`**
Convierte un valor a un número. Es más estricto que `parseInt()` o `parseFloat()`.

- **Sintaxis:** `Number(value)`

- **Ejemplo:**
  ```javascript
  const numero = Number("42.5"); // Devuelve 42.5
  const cadena = Number("42abc"); // Devuelve NaN (cadena no válida)
  const booleano = Number(true); // Devuelve 1
  ```

---

### **1.4 `+` Operador Unario**
Es una forma abreviada de convertir un valor en un número.

- **Ejemplo:**
  ```javascript
  const numero = +"42"; // Devuelve 42
  const flotante = +"42.5"; // Devuelve 42.5
  const invalido = +"abc"; // Devuelve NaN
  ```

---

## **2. Generar Números Aleatorios**

### **2.1 `Math.random()`**
Genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo).

- **Ejemplo:**
  ```javascript
  const aleatorio = Math.random(); // Devuelve un número como 0.5638
  ```

---

### **2.2 Escalar `Math.random()`**
Para obtener números en un rango específico (por ejemplo, entre `min` y `max`):

- **Fórmula:** `Math.random() * (max - min) + min`
- **Ejemplo:**
  ```javascript
  const aleatorio = Math.random() * (100 - 50) + 50; // Entre 50 y 100
  ```

---

### **2.3 Convertir a Entero**
Para obtener números enteros en un rango, combina `Math.random()` con `Math.floor()`:

- **Fórmula:** `Math.floor(Math.random() * (max - min + 1)) + min`
- **Ejemplo:**
  ```javascript
  const entero = Math.floor(Math.random() * (10 - 1 + 1)) + 1; // Entre 1 y 10
  ```

---

### **2.4 Función Personalizada**
Puedes crear funciones reutilizables para generar números aleatorios:

- **Ejemplo:**
  ```javascript
  function numeroAleatorioEntero(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(numeroAleatorioEntero(1, 10)); // Número entre 1 y 10
  ```

---

## **3. Funciones Matemáticas Útiles**

### **3.1 `Math.floor()`**
Redondea un número hacia abajo al entero más cercano.

- **Ejemplo:**
  ```javascript
  const redondeado = Math.floor(4.9); // Devuelve 4
  ```

---

### **3.2 `Math.ceil()`**
Redondea un número hacia arriba al entero más cercano.

- **Ejemplo:**
  ```javascript
  const redondeado = Math.ceil(4.1); // Devuelve 5
  ```

---

### **3.3 `Math.round()`**
Redondea un número al entero más cercano.

- **Ejemplo:**
  ```javascript
  const redondeado = Math.round(4.5); // Devuelve 5
  ```

---

### **3.4 `Math.trunc()`**
Elimina la parte decimal de un número.

- **Ejemplo:**
  ```javascript
  const truncado = Math.trunc(4.9); // Devuelve 4
  ```

---

## **4. Resumen Rápido de Escenarios Comunes**

- **Convertir una cadena en un entero:** `parseInt("42")`
- **Convertir una cadena en un flotante:** `parseFloat("42.5")`
- **Generar un número aleatorio entre 0 y 1:** `Math.random()`
- **Generar un número aleatorio entre 1 y 100:** 
  ```javascript
  Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  ```
